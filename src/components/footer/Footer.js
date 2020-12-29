
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'

function Footer() {

    return (
        <footer className="flex justify-center px-4 text-gray-100 mt-32" style={{backgroundColor: "#110011"}}>
            <div className="container py-6">
                <h1 className="text-center text-lg font-bold lg:text-2xl">
                    Let us inform you about new games and updates!
                </h1>
                <div className="flex justify-center mt-6">
                    <div className="bg-white rounded-md">
                        <div className="flex flex-wrap justify-between md:flex-row" data-children-count="1">
                            <input type="email"
                                   className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                                   placeholder="Enter your email" aria-label="Enter your email"
                                   data-kwimpalastatus="alive" data-kwimpalaid="1609175902165-0" />
                                <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                                    subscribe
                                </button>
                        </div>
                    </div>
                </div>
                <hr className="h-px mt-6 bg-gray-700 border-none" />
                    <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
                        <div>
                            <a href="#" className="text-xl font-bold text-gray-100 hover:text-gray-400">NecroStudios</a>
                        </div>
                        <div className="flex mt-4 md:m-0">
                            <div className="-mx-4">
                                <a href="#"
                                   className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Home</a>
                                <a href="#"
                                   className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Devblog</a>
                                <a href="#"
                                   className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Contact</a>
                                <a href="#"
                                   className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Legal</a>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer