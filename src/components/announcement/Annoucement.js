
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import { ImCross, ImBullhorn } from 'react-icons/im'

function Announcement(props) {

    const [showAnnouncement, hideAnnouncement] = React.useState(false);

    return (
        <div className={"bg-indigo-900 animate__animated " + (showAnnouncement ? "hidden" : "")}>
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className={"flex items-center justify-between flex-wrap"}>
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-indigo-600 text-white">
                            <ImBullhorn/>
                        </span>
                                                <p className="ml-3 font-medium text-white truncate">
                        <span className="md:hidden">
                            {props.info.titleMobile}
                        </span>
                                                    <span className="hidden md:inline">
                                                        {props.info.titleDesktop}
                        </span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                        <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                            {props.info.btnText}
                        </a>
                    </div>
                    {/*
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button onClick={() => hideAnnouncement(!showAnnouncement)} type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span className="sr-only">Dismiss</span>

                            <span className="text-white">
                                <ImCross/>
                            </span>

                        </button>
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}

export default Announcement