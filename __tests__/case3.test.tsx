import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import { getServerSession } from "next-auth";
import Page from '@/app/booking/page';
import * as GetUserProfile from '@/libs/getUserProfile';

const mockCallback = {
  async jwt(param: { token: {}, user: {} }) {
    return { ...param.token, ... param.user };
  },
  async session(param: {session:{}, token:{}, user:{}}) {
    param.session.user = param.token as any;
    return param.session;
  },
}

jest.mock("next-auth", () => {
  const originalModule = jest.requireActual('next-auth');
  
  return {
    __esModule: true,
    ...originalModule,
    getServerSession: jest.fn(({providers:[], session: mockSession, callbacks: mockCallback}) => {
      const resultSession = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: { name: "Alice", token: "xxxxxxxxxxxxxxxxx" }
      };
      return resultSession  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

jest.mock('../src/libs/getUserProfile', ()=>(token:string)=>{
  const userObj = {
    "success": true,
    "data": {
      "_id": "65ed348b84ff40c82db718cc",
      "name": "Alice",
      "email": "alice@vaccinebooking.com",
      "tel": "0884411524",
      "role": "user",
      "createdAt": "2024-03-10T04:18:19.435Z",
      "__v": 0
    }
  }
  return Promise.resolve(userObj)
})


describe('Banner', () => {
  it('Banner display correct session data', async() => {
    const page = await Page()
    render(page)
    await waitFor(()=>{
      const usernames = screen.getAllByText(/Alice/i)
      expect(usernames.length).toBeGreaterThan(0)
    })
  })
})