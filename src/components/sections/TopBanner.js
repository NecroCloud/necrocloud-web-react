
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
        <section className={props.class + " h-72 text-center pt-24 necro-topBar"}>
            <div className="bg-text">
                <p className="text-5xl text-white">{props.headLine}</p>
                <p className="text-3xl text-gray-400">{props.description}</p>
            </div>
        </section>
    )
}

export default TopBanner