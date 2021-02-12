// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React, {useState} from "react";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {Transition} from '@headlessui/react'

// Import Media
import FrostBitePoster from '../../img/studios/games/frostBite/frostBitePoster.png'

function GamesDropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative" style={{zIndex: 10}}>

            <button onClick={() => setIsOpen(!isOpen)} type="button"
                    className="group inline-flex items-center text-base font-medium hover:text-white focus:outline-none text-white">
                <span>Studios</span> <RiArrowDropDownLine className="ml-1"/>
            </button>


            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white dark:bg-gray-600 px-5 py-6 sm:gap-8 sm:p-8">
                            <a target="_blank" href="https://www.youtube.com/watch?v=FiOE4P8z-gc&ab_channel=ReaperMaga"
                               className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500">
                                <img className="h-36" src={FrostBitePoster} alt="inverted souls"/>
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 dark:text-white">
                                        FrostBite
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                        FrostBite is our own survival game. We are curretly in development. <br/> You
                                        can find updates on our youtube channel.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="px-5 py-5 bg-gray-50 dark:bg-gray-500 sm:px-8 sm:py-8">
                            <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase dark:text-white">
                                    Quick links
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li className="text-base truncate">
                                        <a className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                            NecroStudios
                                        </a>
                                    </li>
                                    <li className="text-base truncate">
                                        <a className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                            Dev Blogs
                                        </a>
                                    </li>
                                    <li className="text-base truncate">
                                        <a className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-5 text-sm">
                                <a className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-100">
                                    View
                                    all posts <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default GamesDropdown