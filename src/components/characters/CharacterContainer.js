import { Figure, Button } from "react-bootstrap";

import CharacterDescription from "./CharacterDescription";
import CharacterPoster from "./CharacterPoster";

function CharacterContainer({ people, favoritePeople }) {
  const favoritePeopleArr = Object.values(favoritePeople);
  return (
    <div className="container">
      CHARACTER CONTAINER
      {people.map((person) => {
        return (
          <Figure>
            <div key={person.name}>
              <h2>{person.name}</h2>
              <CharacterPoster
                portrait={
                  "https://i.pinimg.com/564x/56/a6/c3/56a6c3ad6df40af7583d2536e12639e5.jpg"
                }
              />
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
