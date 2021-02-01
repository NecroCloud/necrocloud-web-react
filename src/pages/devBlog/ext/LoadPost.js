// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import '../../../css/popup.css'

// Begin generating the code for a blogpost
// this includes the popup that opens on click

let LoadPost = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 overflow-hidden shadow-md rounded-lg cursor-pointer necro-post">
                <div className="animate-pulse">
                    <div className="h-64 overflow-hidden bg-blue-300">
                    </div>
                    <div className="p-4 pt-6">
                        <div className="h-4 bg-blue-300 w-20 p-0 rounded">
                        </div>
                        <div className="h-6 bg-blue-300 w-48 p-0 rounded mt-2">
                        </div>

                        <div className="h-4 bg-blue-300 w-full p-0 rounded mt-4">
                        </div>
                        <div className="h-4 bg-blue-300 w-full p-0 rounded mt-2">
                        </div>
                        <div className="h-4 bg-blue-300 w-full p-0 rounded mt-2">
                        </div>
                        <div className="h-4 bg-blue-300 w-full p-0 rounded mt-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadPost