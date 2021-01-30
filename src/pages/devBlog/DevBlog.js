// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import {Component} from 'react'
import axios from 'axios'

import TopBanner from "../../components/sections/TopBanner";
import BlogPost from "./ext/BlogPost";
import Popup from "./ext/Popup";

class DevBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.necrocloud.eu/portfolio/all`).then((response) => {
            this.setState({
                posts: response.data
            })
        });
    }

    render() {
        return (
            <div>
                <TopBanner headLine="Portfolio" description="Check out all of our previous work!" class="necro-code-bg"/>
                <div className="grid grid-cols-2 gap-4 container mt-6">
                    {this.state.posts.map((value, index) => {
                        return (
                            <BlogPost info={value}/>
                        )
                    })}
                </div>

                <Popup />
            </div>
        );
    }
}

export default DevBlog