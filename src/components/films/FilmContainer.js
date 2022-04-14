import { Figure, Button } from "react-bootstrap";

import FilmPoster from "./FilmPoster";
import FilmDescription from "./FilmDescription";

function FilmContainer({ filmsArr, favoriteFilms }) {
  return (
    <>
      FILM CONTAINER
      {filmsArr.map((film) => {
        return (
          <Figure>
            <div key={film.episode_id}>
              <h1>{film.name}</h1>
              <div className="container">
                <FilmPoster poster="https://lumiere-a.akamaihd.net/v1/images/622667eb0644dc0001a081fd-image_84d35559.jpeg?region=336%2C0%2C864%2C864" />
                <Figure.Caption>
                  <FilmDescription
                    description={film.opening_crawl}
                    director={film.director}
                    characters={film.characters}
                  />
                  <Button
                    onClick={() => {
                      if (!favoriteFilms.includes(film)) {
                        favoriteFilms.push(film);
                      }
                      console.log("favorite films array", favoriteFilms);
                    }}
                  >
                    Add to Favorites
                  </Button>
                </Figure.Caption>
              </div>
            </div>
          </Figure>
        );
      })}
    </>
  );
}
export default FilmContainer;
