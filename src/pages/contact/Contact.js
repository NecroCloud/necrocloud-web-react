
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import {Component} from 'react'

import TopBanner from "../../components/sections/TopBanner";

class Contact extends Component {
    render() {
        return (
            <div>
                <TopBanner headLine="Kontakt" description="Schreibe uns eine Nachricht und wir werden bald zuruck schreiben." class="necro-invertedSouls-bg"/>
                <div className="mt-4 p-5 container bg-white dark:bg-gray-700 overflow-hidden shadow-md rounded-lg">
                    <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block" data-children-count="1" />
                                <span className="text-gray-700">Full name</span>
                                <input type="text"
                                       className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                       placeholder="" />
                            <label className="block" data-children-count="1" />
                                <span className="text-gray-700">Email address</span>
                                <input type="email"
                                       className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                       placeholder="john@example.com" />
                            <label className="block" data-children-count="1">
                                <span className="text-gray-700">What type of event is it?</span>
                                <select
                                    className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                    <option>Corporate event</option>
                                    <option>Wedding</option>
                                    <option>Birthday</option>
                                    <option>Other</option>
                                </select>
                            </label>
                            <label className="block" data-children-count="1">
                                <span className="text-gray-700">Additional details</span>
                                <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3">

                                </textarea>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact