import Contact from "./Contact.jsx";
import {navItems} from "./constants.js";
import AboutMe from "./AboutMe.jsx";
import Home from "./Home.jsx";
import StarWars from "./StarWars.jsx";

const Main = ({page}) => {


    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <Contact/>
        case navItems[3]:
            return <StarWars/>
        default:
            return <Home/>
    }
}

export default Main;