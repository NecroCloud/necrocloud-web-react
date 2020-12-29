
// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Component Importing
// This is used for importing our components that have
// to be loaded on each site. Edit them in src/components
import Navbar from "./components/navbar/Navbar";
import Announcement from "./components/announcement/Annoucement";
import Footer from "./components/footer/Footer"

// Page Importing
// This is used for importing our pages we want to render
// for our users. Edit these in src/pages
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Games from "./pages/games/Games";

// Begin main APP component
// Routing included. Create a new route with:
// <Route path="/PATH"> LOAD PAGE HERE </Route>
function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Announcement info={{
                    titleMobile: "frostbite: out now!",
                    titleDesktop: "We just released our first game: Inverted Souls! Check it out.",
                    btnText: "Free Download",
                    btnLink: "https://google.de"
                }}/>

                <div style={{minHeight: 63 + "vh"}}>
                    <Switch>
                        <Route path="/games">
                            <Games/>
                        </Route>
                        <Route path="/team">
                            <Team/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
