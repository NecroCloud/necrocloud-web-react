// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'

// This aboutUs Section is used to render the information on the homepage
// on the about us section (src/pages/home/AboutUs.js)
//
// When creating a new section send following props: text, description, icon
function AboutUsSection(props) {
    return (
        <div className="flex">
            <div className="flex-shrink-0">
                <div
                    className="flex items-center text-2xl justify-center h-12 w-12 rounded-md bg-indigo-500 dark:bg-indigo-400 text-white">
                    {props.icon}
                </div>
            </div>
            <div className="ml-4">
                <dl>
                    <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        {props.text}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500  dark:text-gray-300">
                        {props.description}
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default AboutUsSection