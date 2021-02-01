// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React, {useState} from 'react'
import {Transition} from "@headlessui/react"
import '../../../css/popup.css'
import {CgClose} from "react-icons/cg";

// Begin generating the code for a blogpost
// this includes the popup that opens on click

let BlogPost = (props) => {

    // Set States for the opening of the popup
    const [isOpen, setIsOpen] = useState(false)

    // functions for opening/closing popup
    let togglePopup = (value) => {
        if (value === true) {
            document.body.classList.add('overflow-hidden');
            setIsOpen(!isOpen)
        } else {
            document.body.classList.remove('overflow-hidden');
            setIsOpen(!isOpen)
        }
    }

    return (
        <div>
            <div onClick={() => togglePopup(true)}
                 className="max-w-3xl mx-auto bg-white dark:bg-gray-700 overflow-hidden shadow-md rounded-lg cursor-pointer necro-post">
                <div className="h-64 overflow-hidden">
                    <img className="w-full h-64 object-cover" src={props.info.img} alt="Article"/>
                </div>
                <div className="p-6">
                    <div>
                        <span
                            className="text-blue-600 dark:text-blue-400 text-xs font-medium uppercase">{props.info.keyword}</span>
                        <a href="#"
                           className="block text-gray-800 dark:text-white font-semibold text-2xl mt-2 hover:no-underline hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                            {props.info.title}</a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-h-24 overflow-hidden">{props.info.text}</p>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">

                <div className={"fixed z-10 inset-0 overflow-y-auto"}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div onClick={() => togglePopup(false)} className="fixed inset-0 transition-opacity"
                             aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-900 opacity-75">
                            </div>
                        </div>

                        <Transition
                            show={isOpen}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div
                                className="dark:bg-gray-700 inline-block align-bottom bg-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
                                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <div className="gradient-bg">
                                    <img alt="" src={props.info.img}/>
                                    <span onClick={() => togglePopup(false)} className="close">
                                        <CgClose className="transform duration-500 ease-in-out hover:scale-110 hover:rotate-180" />
                                    </span>
                                    <div className="px-4">
                                        <span
                                            className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase pl-1">
                                        {props.info.keyword}
                                        </span>
                                        <br/>
                                        <span
                                            className="text-gray-800 dark:text-white font-semibold text-6xl mt-2 hover:no-underline hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                                            {props.info.title}
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-gray-200 dark:bg-gray-700 px-11">
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                                        {props.info.text}
                                    </p>

                                    <button
                                        className="py-2 px-4 mt-9 mb-10 capitalize text-xl tracking-wide bg-blue-600 text-white font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        <a target="_blank" href={props.info.url}>
                                            Ansehen
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default BlogPost