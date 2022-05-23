import React from 'react'

import{
    CloudUploadIcon,
    PaperAirplaneIcon,
    DatabaseIcon,
    ServerIcon
} from "@heroicons/react/solid"
 
import bgkImg from "../assets/cyber-bg.png"
const Hero=()=> {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">

        <div className="grid md:grid-col-2 max-w-[1240px] m-auto ">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                <p className="text-2xl">Unique Sequencing  Production</p>
                <h1 className="py-3 text-4xl md:text-7xl font-bold">Cloud Management</h1>
                <p className="text-2xl">This is my Tech brand.</p>
                <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
                
            </div>
            <div>
                <img src={bgkImg} alt="/" /> 
            </div>
                

        </div>
        
    </div>
  )
}

export default Hero;