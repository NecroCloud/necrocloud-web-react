// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import '../../../css/team.css'

import { RiDiscordFill, RiGlobalFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

function TeamMember() {

    return (
        <div className="shadow-lg rounded-xl">
            <div className="h-24 w-full m-0 bg-cover rounded-t rounded-t-xl bg-gradient-to-r from-blue-500 via-indigo-700 to-gray-80 dark:from-indigo-900 via-gray-800 to-gray-900">
            </div>
            <div className="h-14 w-full bg-white dark:bg-gray-700 relative p-4">
                <img className="h-32 absolute z-0 profile-picture transform hover:scale-105 hover:rotate-6 duration-500 ease-in-out" src="https://me.tsukidev.de/HmzNiZGfe2.jpg" alt=""/>
            </div>
            <div className="w-full bg-white dark:bg-gray-700 mt-0 p-0 text-center pb-8">
                <h1 className="text-3xl pt-0 font-medium dark:text-gray-200">
                    GamingPascal0
                </h1>
                <div className="mt-1">
                    <span className="py-0.5 pb-1 px-2 m-1 bg-blue-300 rounded text-white shadow-md font-light">PHP</span>
                    <span className="py-0.5 pb-1 px-2 m-1 bg-green-400 rounded text-white shadow-md font-light">HTML</span>
                    <span className="py-0.5 pb-1 px-2 m-1 bg-red-400 rounded text-white shadow-md font-light">CSS</span>
                </div>
                <div className="mt-3 animate-pulse container">
                    <div className="h-4 bg-blue-300 dark:bg-gray-400 w-full p-0 rounded">
                    </div>
                    <div className="h-4 bg-blue-300 dark:bg-gray-400 w-full p-0 rounded mt-1">
                    </div>
                    <div className="h-4 bg-blue-300 dark:bg-gray-400 w-full p-0 rounded mt-1">
                    </div>
                    <div className="h-4 bg-blue-300 dark:bg-gray-400 w-full p-0 rounded mt-1">
                    </div>
                    <div className="h-4 bg-blue-300 dark:bg-gray-400 w-20 p-0 rounded mt-1">
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-600 w-full py-3 text-center h-20 rounded-b-xl">
                <button className="p-2 text-3xl m-1 bg-green-400 rounded text-white shadow-md">
                    <RiGlobalFill />
                </button>
                <button className="p-2 text-3xl m-1 bg-indigo-300 rounded text-white shadow-md">
                    <RiDiscordFill />
                </button>
                <button className="p-2 text-3xl m-1 bg-blue-400 rounded text-white shadow-md">
                    <RiTwitterFill />
                </button>
                <button className="p-2 text-3xl m-1 bg-red-700 rounded text-white shadow-md">
                    <RiYoutubeFill />
                </button>
            </div>
        </div>
    )
}

export default TeamMember