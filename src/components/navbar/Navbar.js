
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

// Import Media
import logoLight from '../../img/cloud/cloudLight.png'
import logoDark from '../../img/cloud/cloudDark.png'

// Import Components
import NavbarLink from "./NavbarLink";
import MobileLink from "./MobileLink";
import GamesDropdown from "./GamesDropdown";
import SignIn from "./SignIn";

function Navbar(){
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
    <div className="relative" style={{backgroundColor: '#110011'}}>
        <div className="px-4 sm:px-6 sm:mx-48">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                        <span className="sr-only">Workflow</span>
                        <img className="h-8 w-auto sm:h-10" src={logoLight} alt="" />
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="rounded-md p-2 text-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <RiMenu5Fill />
                    </button>
                </div>
                <nav className="hidden md:flex space-x-10">


                    <NavbarLink text={"Start"} link={"/"} />
                    <NavbarLink text={"Portfolio"} link={"/portfolio"} />
                    <NavbarLink text={"Services"} link={"/services"} />

                    <GamesDropdown />

                </nav>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

                    <SignIn />

                </div>
            </div>
        </div>

        <div className={"animate__animated animate__slideInDown absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" + (menuOpen ? " " : " hidden")} style={{zIndex: 5}}>
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="hidden dark:block">
                                <img className="h-8 w-auto" src={logoLight} alt="Logo" />
                            </span>

                            <span className="dark:hidden">
                                <img className="h-8 w-auto" src={logoDark} alt="Logo" />
                            </span>
                        </div>
                        <div className="-mr-2">
                            <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="text-2xl bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <AiOutlineClose />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-y-8">

                            <MobileLink text={"Start"} link={"/"} />
                            <MobileLink text={"Portfolio"} link={"/portfolio"} />
                            <MobileLink text={"Team"} link={"/team"} />

                        </nav>
                    </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                        <a href="#top" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                            Inverted Souls
                        </a>

                        <a href="#top" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                            Frostbite
                        </a>

                        <a href="#top" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                            Dev Blogs
                        </a>

                        <a href="#top" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                            Forum
                        </a>

                        <a href="#top" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                            Discord
                        </a>

                        <a href="#top" className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200">
                            Jobs
                        </a>

                    </div>
                    <div>
                        <a href="#top" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar