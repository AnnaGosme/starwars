import { Accordion, Button, Card } from "react-bootstrap";

import helpers from "../../helpers/helpers";
import charactersPosters from "../../assets/characters/characters";

function FilmCharacters({ filmCharacters, people, favoritePeople, planets }) {
  const peopleArr = [];
  helpers.matchInfo("url", filmCharacters, people, peopleArr);

  function addFav(array, fav) {
    if (!array.includes(fav)) {
      array.push(fav);
      return array;
    }
  }

  return (
    <div className="container container-fluid">
      {peopleArr.map((person) => (
        <>
          <Accordion flush>
            <Card style={{ margin: "5px", width: "200px" }}>
              <Accordion.Item eventKey={person.name}>
                <Accordion.Header style={{ margin: "5px" }}>
                  {person.name}{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {charactersPosters.map(function (filmCharacter) {
                      if (filmCharacter.name === person.name) {
                        return (
                          <img
                            className="poster"
                            width={100}
                            src={filmCharacter.poster}
                            alt={filmCharacter.name}
                          />
                        );
                      }
                    })}
                    <p>
                      Homeworld:{" "}
                      {planets.map(function (planet) {
                        if (planet.url === person.homeworld) {
                          return <>{planet.name}</>;
                        }
                      })}
                    </p>
                    <p>Height: {person.height} cm</p>
                    <p>Mass: {person.mass} kg</p>
                    <p>Gender: {person.gender}</p>
                    <Button variant="warning" onClick={() => addFav(favoritePeople, person)}>
                      Add to favorites
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </>
      ))}
    </div>
  );
}

export default FilmCharacters;
