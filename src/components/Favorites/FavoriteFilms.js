import {useState, useEffect} from 'react';
import { Card, Button } from "react-bootstrap";
import FilmDescription from "../Films/FilmDescription";

import helpers from "../../helpers/helpers";

function FavoriteFilms({ favoriteFilms }) {
const [favorites, setFavorites] = useState(favoriteFilms);

  return (
    <>
      <h2>Favorite Films</h2>

      {favoriteFilms.map((film) => {
        return (
    
          <FilmDescription
            filmTitle={film.title}
            filmId={film.episode_id}
            filmDirector={film.director}
            filmCrawl={film.opening_crawl}
            />
    
        );
      })}
    </>
  );
}

export default FavoriteFilms;
