import '@testing-library/jest-dom'
import userLogIn from '@/libs/userLogIn'
import getUserProfile from '@/libs/getUserProfile'
import { screen, render, waitFor } from '@testing-library/react'

describe('Remote User Log-In', () => {
  var logInPromise:Promise<Object>
  var logInJsonResult:Object
  var token:string
  var profilePromise:Promise<Object>
  var profileJsonResult:Object

  beforeAll(async () => {
    const email = "alice@vaccinebooking.com"
    const password = "g00dH3@!th"
    logInPromise = userLogIn(email, password)
    logInJsonResult = await logInPromise

    token = logInJsonResult.token
    profilePromise = getUserProfile(token)
    profileJsonResult = await profilePromise
  })

  it('userLogIn must return correct results', () => {
    expect(logInJsonResult._id).toMatch(/65ed348b84ff40c82db718cc/i)
    expect(logInJsonResult.email).toMatch(/alice@vaccinebooking.com/i) 
  })

  it('getUserProfile must return correct results', () => {
    var profileData = profileJsonResult.data
    expect(profileData.email).toMatch(/alice@vaccinebooking.com/i)
    expect(profileData.role).toMatch(/user/i)
  })
})
