
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
import ContactPopup from "./components/popups/ContactPopup";

// Page Importing
// This is used for importing our pages we want to render
// for our users. Edit these in src/pages
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Games from "./pages/games/Games";
import DevBlog from "./pages/devBlog/DevBlog";
import Login from "./pages/auth/login";

// Begin main APP component
// Routing included. Create a new route with:
// <Route path="/PATH"> LOAD PAGE HERE </Route>
function App() {
    return (
            <Router>
            <div>
                <Navbar/>
                <Announcement info={{
                    titleMobile: "Hallo!",
                    titleDesktop: "Sie brauchen erfahrene Entwickler für ihr Startup? Kontakiere uns jetzt!",
                    btnText: <ContactPopup text="Kontakt aufnehmen"/>,
                }}/>

                <div style={{minHeight: 73.4 + "vh"}}>
                    <Switch>
                        <Route path="/portfolio">
                            <DevBlog/>
                        </Route>
                        <Route path="/games">
                            <Games/>
                        </Route>
                        <Route path="/team">
                            <Team/>
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/impressum">
                            <Login />
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
