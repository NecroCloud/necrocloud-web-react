// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import {Component} from 'react'

import TopBanner from "../../components/sections/TopBanner";
import TeamMember from "./ext/TeamMember";

class Team extends Component {
    render() {
        return (
            <div>
                <TopBanner headLine="Unser Team" description="Lerne unser Dev team kennen." class="necro-invertedSouls-bg"/>

                <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 container mt-6">
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </div>

            </div>
        );
    }
}

export default Team