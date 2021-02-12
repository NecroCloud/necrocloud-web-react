
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import ContactPopup from "../popups/ContactPopup";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="flex justify-center px-4 text-gray-100 mt-32" style={{backgroundColor: "#110011"}}>
            <div className="container py-6 pb-3">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div>
                            <a href="#" className="text-xl font-bold text-gray-100 hover:text-gray-400">NecroStudios</a>
                        </div>
                        <div className="flex mt-4 md:m-0">
                            <div className="-mx-4 mt-3">
                                <Link to='/' className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">
                                    Home
                                </Link>
                                <Link to='/blog' className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">
                                    Devblog
                                </Link>
                                <Link to='/legal' className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">
                                Legal
                                </Link>
                                <a className="px-4 text-sm text-gray-100 font-medium hover:text-gray-400">
                                    <ContactPopup text="Contact" />
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer