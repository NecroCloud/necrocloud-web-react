
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// This component is used to render new links
// in the navbar. Create a new link on src/components/navbar/Navbar.js
//
// To add a Mobile Link go into src/components/navbar/MobileLink.js
function NavbarLink(props){
    return (
        <>
        <Link className="text-base font-medium text-gray-200 hover:text-white" to={props.link}>{props.text}</Link>
        </>
    )
}

export default NavbarLink