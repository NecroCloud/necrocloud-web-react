
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// imports
import React from 'react'

// import pictures
import gamePlay1 from '../../img/studios/games/frostBite/gamePlay1.jpg'
import gamePlay2 from '../../img/studios/games/invertedSouls/ly4+sS.png'

function GameDisplays(){
    return (
        <section className="container mx-auto p-6 -mt-32 md:-mt-48">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                    <div className="cursor-pointer">
                        <img className="transform duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                             src={gamePlay1} alt="" />
                    </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                    <div className="cursor-pointer">
                        <img className="transform duration-500 ease-in-out hover:scale-110 hover:rotate-2"
                             src={gamePlay2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GameDisplays