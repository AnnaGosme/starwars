import { Figure, Button } from "react-bootstrap";

import FilmPoster from "./FilmPoster";
import FilmDescription from "./FilmDescription";
import FilmCharacters from "./FilmCharacters";
import helpers from "../../helpers/helpers";

function FilmContainer({
  planets,
  filmsArr,
  favoriteFilms,
  people,
  favoritePeople,
}) {
  const poster =
    "https://lumiere-a.akamaihd.net/v1/images/622667eb0644dc0001a081fd-image_84d35559.jpeg?region=336%2C0%2C864%2C864";
  return (
    <>
      {filmsArr.map((film) => {
        return (
          <>
            <Figure>
              <div key={film.episode_id}>
                <div className="container">
                  <div>
                    <h1>{film.title}</h1>
                    <h3>{film.director}</h3>
                  </div>

                  <Figure.Image
                    className="poster"
                    width={400}
                    src={poster}
                    alt="Star Wars"
                  ></Figure.Image>
                  <Button
                    variant="danger"
                    onClick={helpers.addFav(favoriteFilms, film)}
                  >
                    Add to Favorites
                  </Button>
                  <Figure.Caption>
                    <FilmDescription description={film.opening_crawl} />
                    <FilmCharacters
                      filmCharacters={film.characters}
                      people={people}
                      favoritePeople={favoritePeople}
                      planets={planets}
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
