import {useState, useEffect} from 'react';

import axios from "axios";

function CharacterDescription({ name, mass, height, homePlanet, films }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => {
        setPlanets(res.data.results);
      })
      .catch((error) =>
        console.log(`Error fetching Starwars characters: ${error}`)
      );
  };
  useEffect(() => {
    fetchPlanets()
  }, []);

console.log("home planets", planets.map(planet => planet.name))
  
  return (
    <>
      <p>Home Planet: {planets.map(planet => planet.name)}</p>
      <p>Height: {height} cm</p>
      <p>Weight: {mass} kg</p>
      <p>Films: {films}</p>
    </>
  );
}

export default CharacterDescription;
