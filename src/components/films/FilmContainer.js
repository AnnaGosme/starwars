import { Figure, Button } from "react-bootstrap";

import FilmPoster from "./FilmPoster";
import FilmDescription from "./FilmDescription";
import FilmCharacters from "./FilmCharacters";
import helpers from "../../helpers/helpers";

function FilmContainer({ filmsArr, favoriteFilms, people, favoritePeople }) {
  return (
    <>
      FILM CONTAINER
      {filmsArr.map((film) => {
        return (
          <>
            <Figure>
              <div key={film.episode_id}>
                <h1>{film.name}</h1>
                <div className="container">
                  <FilmPoster poster="https://lumiere-a.akamaihd.net/v1/images/622667eb0644dc0001a081fd-image_84d35559.jpeg?region=336%2C0%2C864%2C864" />
                  <Figure.Caption>
                    <Button onClick={helpers.addFav(favoriteFilms, film)}>
                      Add to Favorites
                    </Button>
                    <FilmDescription
                      description={film.opening_crawl}
                      director={film.director}
                    />
                    <FilmCharacters
                      characters={film.characters}
                      people={people}
                      favoritePeople={favoritePeople}
                    />
                  </Figure.Caption>
                </div>
              </div>
            </Figure>
          </>
        );
      })}
    </>
  );
}
export default FilmContainer;
