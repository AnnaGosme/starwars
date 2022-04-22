import { Card, Container } from "react-bootstrap";
import charactersPosters from "../../assets/characters/characters";

function FavoriteCharacters({ favoritePeople, planets }) {
  return (
      <Container>
      <h2>Favorite Characters</h2>
        {favoritePeople.map((person) => {
          return (
              <Card bg="dark" style={{ width: "18rem", margin: "5px" }}>
                <Card.Header>{person.name}</Card.Header>
                {charactersPosters.map(function (filmCharacter) {
                  return (filmCharacter.name === person.name) ? 
                    
                      <Card.Img
                        className="poster"
                        width={100}
                        src={filmCharacter.poster}
                        alt={filmCharacter.name}
                      />
              : "";     
                })}
                <Card.Body>
                    <p>
                      {planets.map(function (planet) {
                        return (planet.url === person.homeworld) ? 
                          <> Homeworld: {planet.name}</>
                         : ""
                      })}
                    </p>
                    <p>Height: {person.height} cm</p>{" "}
                    <p>Mass: {person.mass} kg </p>{" "}
                    <p>Gender: {person.gender}</p>
                </Card.Body>
              </Card>
          );
        })}
      </Container>
  );
}

export default FavoriteCharacters;
