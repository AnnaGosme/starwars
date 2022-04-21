import { Accordion, Button, Card, Container, Col } from "react-bootstrap";

import helpers from "../../helpers/helpers";
import charactersPosters from "../../assets/characters/characters";

function FilmCharacters({ filmCharacters, people, favoritePeople, planets }) {
  const peopleArr = [];
  helpers.matchInfo("url", filmCharacters, people, peopleArr);

  return (
    <Container>
      <Col>
        {peopleArr.map((person) => (
          <Accordion flush>
            <Card>
              <Accordion.Item eventKey={person.name}>
                <Accordion.Header>{person.name} </Accordion.Header>
                <Accordion.Body>
                  <Container>
                    <Card className="character-card" style={{ color: "black" }}>
                      {charactersPosters.map(function (filmCharacter) {
                        if (filmCharacter.name === person.name) {
                          return (
                            <img
                              className="poster"
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
                      <br></br>
                      Height: {person.height} cm<br></br>
                      Mass: {person.mass} kg<br></br>
                      Gender: {person.gender}
                      <Button
                        className="button"
                        onClick={() => helpers.addFav(favoritePeople, person)}
                      >
                        Add to favorites
                      </Button>
                    </Card>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        ))}
      </Col>
    </Container>
  );
}

export default FilmCharacters;
