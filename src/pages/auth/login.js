
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
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Import Components used on the home page
// These can be changed in their files (src/pages/home)

// Login Page CLASS
// Information can be retrieved with Axios
// Example: https://pastebin.com/N92HhGvk
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:false
        }
    }

    componentDidMount() {
        this.setState({isLoggedIn:cookies.get('login') == null})
    }

    auth(login) {
        if (login){
            cookies.set('login', 'true', {path: '/'})
            this.setState({isLoggedIn:false})
        }
        else {
            cookies.remove('login')
            this.setState({isLoggedIn:true})
        }
    }

    // Render Page
    render() {
        return (
            <>
                {(() => {
                    if (this.state.isLoggedIn) {
                        return (
                            <a onClick={() => this.auth(true)} className="mt-5 px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                                Login now!
                            </a>
                        )
                    }
                    else {
                        return(
                            <a onClick={() => this.auth(false)} className="mt-5 px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                                Logout
                            </a>
                        )
                    }
                })()}
            </>
        )
    }
}

export default Login