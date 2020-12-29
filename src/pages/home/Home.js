
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import {Component} from 'react'
import axios from 'axios';

// Import Components used on the home page
// These can be changed in their files (src/pages/home)
import Splider from "./Splider";
import GameDisplays from "./GameDisplays";
import AboutUs from "./AboutUs";

// Home Page CLASS
// Information can be retrieved with Axios
// Example: https://pastebin.com/N92HhGvk
class Home extends Component {

    // Render Page
    render() {
        return (
            <>
                <Splider />
                <GameDisplays />
                <AboutUs  />
            </>
        )
    }
}

export default Home