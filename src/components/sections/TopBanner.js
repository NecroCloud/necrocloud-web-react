
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'

function TopBanner(props){
    return (
        <section className="h-72 text-center pt-20" style={{backgroundColor: "rgb(30, 30, 30)"}}>
            <p className="text-5xl text-white">{props.headLine}</p>
            <p className="text-3xl text-gray-400">{props.description}</p>
        </section>
    )
}

export default TopBanner