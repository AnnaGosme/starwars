import { Accordion, Button, Card, Container, Row, Col } from "react-bootstrap";

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
    <div className="container container-fluid" style={{ padding: "50px" }}>
      {peopleArr.map((person) => (
        <>
          <Accordion flush>
            <Card style={{ margin: "5px", width: "250px" }}>
              <Accordion.Item eventKey={person.name}>
                <Accordion.Header>{person.name} </Accordion.Header>
                <Accordion.Body>
                  <Container>
                    {charactersPosters.map(function (filmCharacter) {
                      if (filmCharacter.name === person.name) {
                        return (
                          <img
                            className="poster"
                            width={120}
                            src={filmCharacter.poster}
                            alt={filmCharacter.name}
                          />
                        );
                      }
                    })}

                    {planets.map(function (planet) {
                      if (planet.url === person.homeworld) {
                        return <>Homeworld: {planet.name}</>;
                      }
                    })}
                    <p>Height: {person.height} cm</p>
                    <p>Mass: {person.mass} kg</p>
                    <p>Gender: {person.gender}</p>
                    <Button
                      variant="warning"
                      onClick={() => addFav(favoritePeople, person)}
                    >
                      Add to favorites
                    </Button>
                  </Container>
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
