
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import AboutUsSection from "./ext/AboutUsSection"
import { BiWorld, BiHeart } from 'react-icons/bi'
import { MdUpdate, MdChat } from 'react-icons/md'
// Render the about us section
// will be rendered in src/pages/home/Home.js
// Change the data by adding another about us component

function AboutUs() {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase dark:text-indigo-400">What
                        do we
                        stand for?</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        About us
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto  dark:text-gray-300">
                        NecroStudios is group of 3 indie gamedevs who came together to create the next hardcore survial
                        game. We
                        all loved games such as "The Forest" which is
                        why we decided to take inspiration from it and create our own indie surivial game.
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <AboutUsSection icon={<BiWorld />} text={"We bring people together."} description={"We try to make out games available in many languages. That way we hope to bring people together!"} />
                        <AboutUsSection icon={<BiHeart />} text={"We care about everyone."} description={"We want to be fair to all gamers. This mean we pride ourselves on community involvement and cooperation!"} />
                        <AboutUsSection icon={<MdUpdate />} text={"Updates and patches."} description={"Our games are not done on launch! We support them for years to come."} />
                        <AboutUsSection icon={<MdChat />} text={"Communication."} description={"We want to hear feedback from you! Join our community forums or discord now."} />

                    </dl>
                </div>
            </div>
        </div>
    )
}

export default AboutUs