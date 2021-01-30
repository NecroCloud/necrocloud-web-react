
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import { Link} from "react-router-dom";

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
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase dark:text-indigo-400">Was ist unser Ziel?</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Über uns
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto  dark:text-gray-300">
                        NecroCloud ist ein Entwickler team, welches sich darauf focuisert hat für Startups zu fairen Preisen Software zu gestalten und zu programmieren.<br/>
                        Unser Team besteht aus drei Entwicklern. Wir haben alle schon viel Erfahrung über mehrere Jahre gesammlet.<br />
                        <br />Lerne uns und unsere Motivationen auf der <Link className="hover:text-blue-400" to="/team">Team Seite</Link> kennen!
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <AboutUsSection icon={<BiWorld />} text={"Wir arbeiten zusammen."} description={"Wir wollen nicht einfach so schnell wie Möglich eurer Projekt abschließen. Wir arbeiten mit euch bis zum Ende."} />
                        <AboutUsSection icon={<BiHeart />} text={"Wir wollen helfen."} description={"Wir sammeln gerade selber noch Erfahrung und wollen unser Portfolio aufbessern. Wir müssen deshalb noch nicht auf große Einnahmen achten."} />
                        <AboutUsSection icon={<MdUpdate />} text={"Wir bleiben am Start."} description={"Wir sind da für euch. Selbst nachdem wir das Projekt abgeschloßen haben. Schreibt uns einfach an und wir sind schnell da zum helfen."} />
                        <AboutUsSection icon={<MdChat />} text={"Wir setzten eure Idee um."} description={"Wir wollen mit euch zusammen arbeiten. Wir setzten eure Ideen um und helfen euch dabei realistische Erwartungen zu setzten."} />

                    </dl>
                </div>
            </div>
        </div>
    )
}

export default AboutUs