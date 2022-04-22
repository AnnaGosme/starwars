import { Accordion, Button, Card, Container, Col } from "react-bootstrap";
import { useAlert } from "react-alert";

import helpers from "../../helpers/helpers";
import charactersPosters from "../../assets/characters/characters";

function FilmCharacters({ filmCharacters, people, favoritePeople, planets }) {
  const alert = useAlert();
  const peopleArr = [];
  helpers.matchInfo("url", filmCharacters, people, peopleArr);

  return (
    <Container>
      <Col>
        {peopleArr.map((person) => (
          <Accordion flush>
            <Card key={person.name}>
              <Accordion.Item eventKey={person.name}>
                <Accordion.Header>{person.name} </Accordion.Header>
                <Accordion.Body>
                  {charactersPosters.map(function (filmCharacter) {
                    return filmCharacter.name === person.name ? (
                      <Card.Img
                        key={filmCharacter.name}
                        className="poster"
                        src={filmCharacter.poster}
                        alt={filmCharacter.name}
                      />
                    ) : (
                      ""
                    );
                  })}
                  {planets.map(function (planet) {
                    return planet.url === person.homeworld ? (
                      <div key={planet.name}>Homeworld: {planet.name}</div>
                    ) : (
                      ""
                    );
                  })}
                  Height: {person.height} cm<br></br>
                  Mass: {person.mass} kg<br></br>
                  Gender: {person.gender}
                  <br></br>
                  <Button
                    variant="danger"
                    active
                    onClick={() => {
                      helpers.addFav(favoritePeople, person);
                      alert.show(`${person.name} added to Favorites`);
                    }}
                  >
                    Add to favorites
                  </Button>
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
