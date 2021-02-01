
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import ContactPopup from "../popups/ContactPopup";

function Footer() {

    return (
        <footer className="flex justify-center px-4 text-gray-100 mt-32" style={{backgroundColor: "#110011"}}>
            <div className="container py-6">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div>
                            <a href="#" className="text-xl font-bold text-gray-100 hover:text-gray-400">NecroStudios</a>
                        </div>
                        <div className="flex mt-4 md:m-0">
                            <div className="-mx-4">
                                <a href="#"
                                   className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Home</a>
                                <a href="#"
                                   className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">Devblog</a>
                                <a href="#" className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">
                                    <ContactPopup text="Contact" />
                                </a>
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