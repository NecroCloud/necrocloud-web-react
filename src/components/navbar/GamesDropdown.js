// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React, {useRef, useEffect} from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';

// Import Media
import InvertedSoulsPoster from '../../img/studios/games/invertedSouls_poster.png'

function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log("Clicked!")
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function GamesDropdown() {

    const [dropDownOpen, toggleDropdown] = React.useState(false);
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef} className="relative">

            <button onClick={() => toggleDropdown(!dropDownOpen)} type="button"
                    className="group inline-flex items-center text-base font-medium hover:text-white focus:outline-none text-white">
                <span>Games</span> <RiArrowDropDownLine className="ml-1" />
            </button>

            <div
                className={"animate__animated animate__fadeIn animate__faster absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 " + (dropDownOpen ? " " : " hidden")}>
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white dark:bg-gray-600 px-5 py-6 sm:gap-8 sm:p-8">
                        <a href="#top"
                           className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500">
                            <img className="h-36" src={InvertedSoulsPoster} alt="inverted souls"/>
                            <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-white">
                                    Inverted Souls
                                </p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                    Go on a mysterious journey with your bound soul mate.
                                    <br/>Escape the prison you are being held and discover why you have such a
                                    connection!
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
                                    <a href="#top"
                                       className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                        Store
                                    </a>
                                </li>
                                <li className="text-base truncate">
                                    <a href="#top"
                                       className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                        Dev Blogs
                                    </a>
                                </li>
                                <li className="text-base truncate">
                                    <a href="#top"
                                       className="font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5 text-sm">
                            <a href="#top"
                               className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-100">
                                View
                                all posts <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GamesDropdown