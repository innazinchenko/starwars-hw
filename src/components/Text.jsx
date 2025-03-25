import {useEffect, useState} from "react";
import {base_url} from "./constants.js";


const Text = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6 + 1);
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Something went wrong!`);
                }
                return res.json();
            })
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(e => setOpeningCrawl(e.message));
    }, [])

    return (
            <p className="farGalaxy">
                {openingCrawl}
            </p>
    );
};

export default Text;