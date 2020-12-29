
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '../../css/slider.css'

// Import pictures
import logoLight from '../../img/studios/studiosLight.png'
import invertedSoulsLogo from '../../img/studios/games/invertedSouls/logoLight.png'

// Options for Splider
// See more options here: https://splidejs.com/options/
const options = {
    type: 'loop',
    arrows: false,
    autoplay: true,
    interval: 5000,
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    drag: true,
    pagination: false,
}

// Splider function
// Will be rendered on src/pages/home/Home.js
//
// To create new background make a CSS class in src/css/splider.css
function Splider() {
    return (
        <Splide options={options}>
            <SplideSlide className="bg-cover bg-frostbite necro-slider">
                <img className="mx-auto mt-10 md:mt-28 max-h-32 md:max-h-80"
                     src={logoLight}
                     alt="" />
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center hidden md:shown">
                    <div className="rounded-md shadow">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Dev Blog
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Play now!
                        </a>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide className="bg-cover bg-invertedSouls necro-slider">
                <img className="mx-auto mt-10 md:mt-28 max-h-32 md:max-h-80"
                     src={invertedSoulsLogo}
                     alt="" />
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center hidden md:shown">
                    <div className="rounded-md shadow">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Dev Blog
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                           className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                            Play now!
                        </a>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    )
}

export default Splider