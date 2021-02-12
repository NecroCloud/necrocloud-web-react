
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'

function Service(props) {

    return (
        <>
            <div className="max-w-sm m-4 bg-gray-200 dark:bg-gray-700 rounded-3xl shadow-md py-6 relative px-16 text-center" style={{zIndex: -1}}>
                <div className="p-3 shadow-md rounded-2xl w-14 h-14 font-3xl bg-blue-500 dark:bg-indigo-800 text-gray-100 absolute -top-4 left-0 right-0 mx-auto">
                    {props.icon}
                </div>
                <div className="pt-7">
                    <h1 className="text-xl lg:text-3xl font-semibold tracking-wider text-gray-800 dark:text-gray-200">
                        {props.title}
                    </h1>
                    <p className="mt-5 leading-8 text-base text-gray-700 lh-0 dark:text-gray-300">
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Service