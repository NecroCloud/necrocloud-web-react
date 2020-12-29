
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'

// This is shown to people not loggedIN
// If they are logged in this component will be changed
// to show their user information.
// used: src/components/navbar/Navbar.js
function SignIn(){

    return (
        <>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-200 hover:text-white mr-4">
                Sign in
            </a>
            <button
                className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full"
                     src="https://external-preview.redd.it/6e9Hyg9nO86pbgZu1RJXBUzYWH9_zR6k17JaPhAAaIs.png?format=pjpg&auto=webp&s=0ffd2285e4551f1296ebc5ed2787d4468240eeba"
                     alt="" />
            </button>
        </>
    )

}

export default SignIn