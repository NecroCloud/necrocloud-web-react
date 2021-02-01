// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import {Component} from 'react'
import API from "../../api/API";

// Import components
import TopBanner from "../../components/sections/TopBanner";
import BlogPost from "./ext/BlogPost";

class DevBlog extends Component {

    // Constructor and creation of state
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    // Get the data from the API
    componentDidMount() {

        API.get(`portfolio/all`).then((response) => {
            this.setState({
                posts: response.data
            })
        });
    }

    render() {
        return (
            <div>
                <TopBanner headLine="Portfolio" description="Check out all of our previous work!"
                           class="necro-code-bg"/>
                <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 container mt-6">
                    {this.state.posts.map((value, index) => {
                        return (
                            <BlogPost info={value}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default DevBlog