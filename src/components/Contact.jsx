import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url} from "./constants.js";

const lsPlanets = "planets_data";
const Contact = () => {
    const [planets, setPlanets] = useState(['Loading..']);


    const anyDataYet = (timestamp) => {
        const now = new Date().getTime();
        const difference = now - timestamp;
        return difference > 30 * 24 * 60 * 60 * 1000;
    };


    async function fetchPlanets() {
            const response = await fetch(`${base_url}/v1/planets/`);
            const data = await response.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);


        localStorage.setItem(lsPlanets, JSON.stringify({
            planets: planets,
            timestamp: new Date().getTime()
        }
        ));

        }


    useEffect(() => {


        const storedPlanets = localStorage.getItem(lsPlanets);
        if (storedPlanets) {
            const parsedPlanets = JSON.parse(storedPlanets);
            if (!anyDataYet(parsedPlanets.timestamp)) {
                setPlanets(parsedPlanets.planets);
                return;
            }
        }

        fetchPlanets();
        return () => console.log('Component Contact was unmounted');
    }, []);


        return (
            <form className={'containerContact'} onSubmit={e => e.preventDefault()}>

                <label>First Name
                    <input type="text" name="firstname" placeholder="Your name.."/>
                </label>

                <label>Last Name
                    <input type="text" name="lastname" placeholder="Your last name.."/>
                </label>

                <label>Planet
                    <select name="planet">
                        {planets.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </label>

                <label>Subject</label>
                <textarea name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>

                <button type="submit">Submit</button>
            </form>
        );
};

export default Contact;