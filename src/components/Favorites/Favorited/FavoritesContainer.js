import { Card } from "react-bootstrap";

import FavoriteCharacters from "./FavoriteCharacters";
import FavoriteFilms from "./FavoriteFilms";
import CharactersPage from "./FavoriteCharacters";
import FilmsPage from "./FavoriteFilms";

function FavoritesContainer(favoriteFilms, favoritePeopleArr) {
  console.log("favorite people in container", favoritePeopleArr);
  console.log("favorite films in container", favoriteFilms);
  return (
    <>
      FAVORITES CONTAINER
      <Card style={{ width: "18rem" }}>
        <FavoriteFilms favoriteFilms={favoriteFilms} />
      </Card>
      <Card style={{ width: "18rem" }}>
        <FavoriteCharacters favoritePeopleArr={favoritePeopleArr} />
      </Card>
    </>
  );
}

export default FavoritesContainer;
