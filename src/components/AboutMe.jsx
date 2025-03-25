import {useEffect, useState} from "react";
import {base_url} from "./constants.js";


const AboutMe = () => {
    const [mainHero, setMainHero] = useState('Loading...');

    useEffect(() => {

        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setMainHero(data))
    }, [])
    return (
        <div>
            <p className="farGalaxy">
                Name: {mainHero.name}
            </p>
            <p className="farGalaxy">
                Gender: {mainHero.gender}
            </p>

            <p className="farGalaxy">
                Hair color: {mainHero.hair_color}
            </p>

            <p className="farGalaxy">
                Eye color: {mainHero.eye_color}
            </p>
        </div>
    );
};

export default AboutMe;