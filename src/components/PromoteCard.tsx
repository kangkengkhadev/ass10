'use client'
import VideoPlayer from "./VideoPlayer";
import { useState, useReducer } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
    const [playing, setPlaying] = useState(true)

    useWindowListener('contextmenu', (e)=>{
        e.preventDefault()
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 
        rounded-lg bg=gray-200 flex flex-row">
            <VideoPlayer vdoSrc="/video/getvaccine.mp4" onPlayPause={setPlaying}
            isPlaying={playing}></VideoPlayer>
            <div className="m-5 relative">
                Get your vaccine today.
                <button className="absolute bottom-0 left-0 rounded-md 
                bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
                onClick={() => {setPlaying(!playing)}}>
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>

        </div>
    )
}