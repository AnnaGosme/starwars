import { Card } from "react-bootstrap";
import charactersPosters from "../../assets/characters/characters";

function FavoriteCharacters({ favoritePeople, planets }) {
  return (
    <>
      <h2>Favorite Characters</h2>
      <div className="container">
        {favoritePeople.map((person) => {
          return (
            <Card style={{ width: '11rem', height: '21rem', backgroundColor:'black', border:'1px solid white' }}>
              <div className="container">
              <h3>{person.name}</h3>
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
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default FavoriteCharacters;
