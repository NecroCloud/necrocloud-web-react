
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
                Anmelden
            </a>
        </>
    )

}

export default SignIn