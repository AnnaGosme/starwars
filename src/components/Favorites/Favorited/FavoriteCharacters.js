import { Carousel } from "react-bootstrap";

import RemoveFromFavs from "../Buttons/RemoveFromFavs";

function FavoriteCharacters() {
  const favoriteCharacters = ["Luke", "Leia", "R2D2"];
  return (
    <>
     
      <Carousel>
        {favoriteCharacters.map((character) => {
          return (
            <Carousel.Item>
              <p>{character}</p>
              <RemoveFromFavs />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default FavoriteCharacters;
