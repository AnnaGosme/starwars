import CharacterDescription from "./CharacterDescription";
import CharacterPoster from "./CharacterPoster";
import AddToFavs from "../Favorites/Buttons/AddToFavs";

function CharacterContainer() {
  const characters = [
    {
      name: "Luke",
      mass: 77,
      height: 179,
      home_planet: "Tatooine",
      films: ["Star Wars", "Another Star Wars"],
      portrait: "https://picsum.photos/200",
    },
    {
      name: "Leia",
      mass: 69,
      height: 160,
      home_planet: "Organa Major",
      films: ["Star Wars", "Star Wars Again"],
      portrait: "https://picsum.photos/200",
    },
    {
      name: "Vader",
      mass: 80,
      height: 170,
      home_planet: "Mustafar",
      films: ["Star Wars", "Another Star Wars", "Star Wars Again"],
      portrait: "https://picsum.photos/200",
    },
  ];
  return (
    <div className="container">
     CHARACTER CONTAINER
      {characters.map((character) => {
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
