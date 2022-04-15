import { Figure, Button } from "react-bootstrap";

import CharacterDescription from "./CharacterDescription";
import CharacterPoster from "./CharacterPoster";

function CharacterContainer({ people, favoritePeople }) {
  const favoritePeopleArr = Object.values(favoritePeople);
  console.log("favoritePeopleArr", favoritePeopleArr);
  return (
    <div className="container">
      {people.map((person) => {
        return (
          <Figure>
            <div key={person.name}>
              <h2>{person.name}</h2>
              <CharacterPoster />
              <CharacterDescription
                mass={person.mass}
                height={person.height}
                homeworld={person.homeworld}
                films={person.films}
              />
              <Button
                onClick={() => {
                  if (!favoritePeopleArr.includes(person)) {
                    favoritePeopleArr.push(person);
                  }
                  console.log(
                    "added to favorite people array",
                    favoritePeopleArr
                  );
                }}
              >
                Add to Favorites
              </Button>
            </div>
          </Figure>
        );
      })}
    </div>
  );
}

export default CharacterContainer;
