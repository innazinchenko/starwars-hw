import {useEffect, useState} from "react";
import {base_url} from "./constants.js";


const AboutMe = () => {
    const [mainHero, setMainHero] = useState('Loading...');

    useEffect(() => {
        const localStorageData = localStorage.getItem('localStorageData');
        if (localStorageData) {
            const {data, timestamp} = JSON.parse(localStorageData);
            if (Date.now() - timestamp < (30 * 24 * 60 * 60 * 1000)) {
            setMainHero(data);
            }
        } else {

            fetch(`${base_url}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    setMainHero(data);
                    localStorage.setItem('localStorageData', JSON.stringify({data, timestamp: Date.now()}));
                })
        }
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