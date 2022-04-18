import { Card, Figure, Button } from "react-bootstrap";

import FilmPoster from "./FilmPoster";
import FilmDescription from "./FilmDescription";
import FilmCharacters from "./FilmCharacters";
import filmPosters from "../../assets/films/films";
import helpers from "../../helpers/helpers";

function FilmContainer({
  planets,
  filmsArr,
  favoriteFilms,
  people,
  favoritePeople,
}) {
  return (
    <>
      {filmsArr.map((film) => {
        return (
          <Card body>
            <Figure>
            <h1>{film.title}</h1>
              <div className="container">
                {filmPosters.map(function (filmPoster) {
                  if (filmPoster.ep === film.episode_id) {
                    return (
                      <Figure.Image
                        className="poster"
                        width={400}
                        src={filmPoster.poster}
                        alt={filmPoster.title}
                      ></Figure.Image>
                    );
                  }
                })}
                <div key={film.episode_id}>
                  
                    
                    <h3>Director: {film.director}</h3>
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
          </Card>
        );
      })}
    </>
  );
}

export default FilmContainer;
