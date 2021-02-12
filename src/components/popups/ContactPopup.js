// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React, {Component} from 'react'
import {Transition} from '@headlessui/react'
import {useState} from 'react'
import '../../css/popup.css'
import API from "../../api/API";
import {Checkmark} from 'react-checkmark'
import {CgClose} from "react-icons/cg";


// Begin creating the component
// It must be called with a text property to change
// the name of the link

function ContactPopup(props) {

    // Set React states for the contact form
    const [isOpen, setIsOpen] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // Function to submit message
    function submitMessage() {
        let name = document.getElementById("contactName").value
        let email = document.getElementById("contactEmail").value
        let text = document.getElementById("contactText").value
        let category = "Contact Aufnahme"

        // Check if the User entered all the data correctly
        let notCompleted = []
        if (name === "") {
            notCompleted.push(" Name ")
        }
        if (email === "") {
            notCompleted.push(" Email ")
        }
        if (text === "") {
            notCompleted.push(" Nachricht ")
        }

        if (notCompleted.length > 0) {
            setErrorMessage("Bitte fülle noch folgende Felder aus: " + notCompleted);
        } else {
            const message = {
                name: name,
                category: category,
                email: email,
                text: text
            }

            setIsDone(true)

            API.post("contact/new", message).then(r => {
            })
        }
    }


    return (
        <>
            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{props.text}</span>
            <div style={{zIndex: 10}}>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={"fixed z-10 inset-0 overflow-y-auto"}>
                        <div
                            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div onClick={() => setIsOpen(!isOpen)} className="fixed inset-0 transition-opacity"
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
                                leaveTo="opacity-0 scale-95"
                            >
                                <div
                                    className="dark:bg-gray-700 inline-block align-bottom bg-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
                                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                                    <div className="gradient-bg">
                                        <img alt="" src="https://i.imgur.com/TlzC5E1.jpg"/>
                                        <span onClick={() => setIsOpen(false)} className="close">
                                        <CgClose
                                            className="transform duration-500 ease-in-out hover:scale-110 hover:rotate-180"/>
                                    </span>
                                        <div className="px-4">
                                            <br/>
                                            <span
                                                className="text-gray-800 dark:text-white font-semibold text-6xl mt-2 hover:no-underline hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                                        Kontakt
                                    </span>
                                        </div>
                                    </div>

                                    <div className="bg-gray-200 dark:bg-gray-700 px-11">
                                        <Transition show={!isDone} leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100" leaveTo="opacity-0">
                                            <form>
                                                <label className="text-gray-800 dark:text-white"
                                                       htmlFor="nameInput">Name</label>
                                                <input id="contactName" type="text"
                                                       className="mb-4 w-full text-2xl text-black p-2 rounded shadow-sm border-none dark:bg-gray-500 hover:border-none hover:shadow-2xl hover:outline-none dark:text-white"/>

                                                <label className="text-gray-800 dark:text-white" htmlFor="nameInput">Email
                                                    Adresse</label>
                                                <input id="contactEmail" type="email"
                                                       className="mb-4 w-full text-2xl text-black p-2 rounded shadow-sm border-none dark:bg-gray-500 hover:border-none hover:shadow-2xl hover:outline-none dark:text-white"/>

                                                <label className="text-gray-800 dark:text-white"
                                                       htmlFor="nameInput">Nachricht</label>
                                                <textarea id="contactText" rows="5"
                                                          className="w-full text-2xl text-black p-2 rounded shadow-sm border-none dark:bg-gray-500 hover:border-none hover:shadow-2xl hover:outline-none dark:text-white"/>
                                            </form>

                                            <a className="text-red-400">
                                                {errorMessage}
                                            </a>
                                            <br/>
                                            <button onClick={() => submitMessage()}
                                                    className="py-2 px-4 mt-4 mb-10 capitalize text-xl tracking-wide bg-blue-600 text-white font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                                Absenden
                                            </button>
                                        </Transition>

                                        <Transition show={isDone} enter="transition ease-out duration-5000 transform"
                                                    enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100">

                                            <div className="text-center mt-8">

                                        <span className="hidden dark:block">
                                            <Checkmark size='128px' color='light'/>
                                        </span>

                                                <span className="dark:hidden">
                                            <Checkmark size='128px' color='#5A6371'/>
                                        </span>

                                                <br/>
                                                <h1 className="text-3xl pt-4 text-gray-800 dark:text-white">
                                                    Ihre Nachricht wurde abgesendet.
                                                </h1>
                                                <br/>
                                                <h2 className="mb-16 text-gray-800 dark:text-white">
                                                    Sie werden in kürze eine Bestätigungsemail in ihrem Postfach
                                                    enthalten.<br/>
                                                    Wir werden so schnell wie möglich auf ihre Anfrage antworten.
                                                </h2>
                                            </div>

                                        </Transition>

                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    )
}

export default ContactPopup