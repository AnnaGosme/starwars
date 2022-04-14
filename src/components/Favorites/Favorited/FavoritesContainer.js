import { Card } from "react-bootstrap";

import FavoriteCharacters from "./FavoriteCharacters";
import FavoriteFilms from "./FavoriteFilms";
import HomePage from '../Buttons/FilmsPage';
import CharactersPage from "../Buttons/CharactersPage";
import FilmsPage from "../Buttons/FilmsPage";

function FavoritesContainer() {
  return (
    <>
      FAVORITES CONTAINER
      <Card>
        <FavoriteFilms />
      </Card>
      <Card>
        <FavoriteCharacters />
      </Card>
      <FilmsPage />
      <CharactersPage />
    </>
  );
}

export default FavoritesContainer;
