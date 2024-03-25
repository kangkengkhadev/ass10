"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function DateReserve() {

    const [reserveDate, setReserveDate] = useState(null);
    const [location, setLocation] = useState('Chula');

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate} onChange={(value)=>{setReserveDate(value); alert(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" id="hospital" value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="h-[2em] w-[200px]" defaultValue="Chula">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    );
}