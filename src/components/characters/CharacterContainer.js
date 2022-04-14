import { useState, useEffect } from "react";
import axios from "axios";

import CharacterDescription from "./CharacterDescription";
import CharacterPoster from "./CharacterPoster";
import AddToFavs from "../favorites/Buttons/AddToFavs";

function CharacterContainer() {
  const [people, setPeople] = useState([]);

  const fetchPeople = () => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch((error) =>
        console.log(`Error fetching Starwars characters: ${error}`)
      );
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div className="container">
      CHARACTER CONTAINER
      {people.map((character) => {
        return (
          <div key={character.name}>
            <h2>{character.name}</h2>
            <CharacterPoster portrait={character.portrait} />
            <CharacterDescription
              mass={character.mass}
              height={character.height}
              homePlanet={character.home_planet}
              films={character.films}
            />
            <AddToFavs />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterContainer;
