import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url} from "./constants.js";


const Contact = () => {
    const [planets, setPlanets] = useState(['Loading..']);

        async function fetchPlanets() {
            const response = await fetch(`${base_url}/v1/planets/`);
            const data = await response.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
        }


        useEffect(() => {
            const lsPlanets = localStorage.getItem('lsPlanets');
            if (lsPlanets) {
                setPlanets(lsPlanets)
            } else {
                fetchPlanets()
                    .then(data =>{
                        localStorage.setItem('lsPlanets', JSON.stringify(data));
                    })
            }
        },[]);


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