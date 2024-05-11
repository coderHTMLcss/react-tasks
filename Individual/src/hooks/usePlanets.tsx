import { useEffect, useState } from "react";

const usePlanets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://swapi.py4e.com/api/planets');
                const data = await response.json();
                console.log(data);

                setPlanets(data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()
    }, []);

    return planets
};

export default usePlanets;