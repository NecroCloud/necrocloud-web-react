
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'

// Import Page Components
import TopBanner from "../../components/sections/TopBanner";
import Service from "./ext/service";
import ContactPopup from "../../components/popups/ContactPopup";
import { HiOutlineDesktopComputer } from 'react-icons/hi'

function Services(){

    return (
        <>
            <TopBanner class="necro-invertedSouls-bg" />
            <div className="px-4 xl:px-0 py-6">
                <div className="mx-auto container">
                    <div className="lg:text-center mt-4">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase dark:text-indigo-400">
                            Was können wir für Sie machen?
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Unser Angebot
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto dark:text-gray-300">
                            Willkommen zu unserm Angebot. Wir arbeiten mit vielen modernen Technologien, um eurer Projekt umzusetzten.<br/>
                            Falls Sie mehr Informationen zu unsern Angeboten haben möchten, schreiben Sie uns einfach eine Nachricht. <br/>
                        </p>
                        <button className="bg-indigo-600 p-3 rounded-xl mt-3 text-white shadow-md focus:outline-none hover:shadow-2xl hover:bg-indigo-500">
                            <ContactPopup text="Nachricht schrieben." />
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10">
                        <Service title="Website" text="This is a test Service. Please dont regard it" icon=<HiOutlineDesktopComputer size="2rem" /> />
                        <Service title="Apps" text="This is a test Service. Please dont regard it" icon=<HiOutlineDesktopComputer size="2rem" /> />
                        <Service title="Software" text="This is a test Service. Please dont regard it" icon=<HiOutlineDesktopComputer size="2rem" /> />
                        <Service title="Games" text="This is a test Service. Please dont regard it" icon=<HiOutlineDesktopComputer size="2rem" /> />
                        <Service title="SEO" text="This is a test Service. Please dont regard it" icon=<HiOutlineDesktopComputer size="2rem" /> />
                        <Service title="Cloud" text="This is a test Service. Please dont regard it" icon=<HiOutlineDesktopComputer size="2rem" /> />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services