import { Button } from "react-bootstrap";

import filmPosters from "../../assets/films/films";
import helpers from "../../helpers/helpers";

function FilmDescription({
  filmTitle,
  filmId,
  filmDirector,
  filmCrawl,
  film,
  favoriteFilms,
}) {
  return (
    <>
      <h1>{filmTitle}</h1>
      <div className="container">
        {filmPosters.map(function (filmPoster) {
          if (filmPoster.ep === filmId) {
            return (
              <img
                key={filmPoster.id}
                className="poster"
                width="250px"
                src={filmPoster.poster}
                alt={filmPoster.title}
                style={{ margin: "20px" }}
              ></img>
            );
          }
        })}
        <h3>Director: {filmDirector}</h3>
        <p style={{ padding: "10px", margin: "20px" }}>{filmCrawl}</p>
      </div>
    </>
  );
}

export default FilmDescription;
