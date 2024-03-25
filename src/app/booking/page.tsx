import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { UserJson } from "../../../interface";
import { useState, useEffect } from "react";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Booking() {

    const session = await getServerSession(authOptions)

    var userResponse;
    if (session) {
        userResponse = await getUserProfile(session.user.token)
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-6">
            <div className="text-6xl text-center">Vaccine Booking</div>

            {userResponse && (
                <div className="py-5">
                    <div>Name: {userResponse.data.name}</div>
                    <div>Email: {userResponse.data.email}</div>
                    <div>Tel.: {userResponse.data.tel}</div>
                    <div>Member Since: {new Date(userResponse.data.createdAt).toString()}</div>
                </div>
            )}

            <div className="flex flex-row space-x-14 p-6">
                <TextField variant="standard" name="Name-lastname" label="Name-lastname"
                    className="h-[2em] w-[200px]"></TextField>
                <TextField variant="standard" name="Citizen ID" label="Citizen ID"
                    className="h-[2em] w-[200px]"></TextField>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Booking Date and Location</div>
                <DateReserve />
            </div>

            <button name="Book Vaccine" className="block rounded-md bg-sky-600
            hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                Book Vaccine
            </button>
        </main>
    );
}
