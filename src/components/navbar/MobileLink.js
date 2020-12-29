
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// This component is used to render links on the mobile
// navbar. Add new links on src/components/navbar/Navbar.js
function MobileLink(props){
    return (
        <>
        <Link className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700" to={props.link}>
            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">{props.text}</span>
        </Link>
        </>
    )
}

export default MobileLink