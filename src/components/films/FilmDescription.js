import { Container } from "react-bootstrap";

import filmPosters from "../../assets/films/films";

function FilmDescription({ filmTitle, filmId, filmDirector, filmCrawl }) {
  return (
    <Container>
      <h1>{filmTitle}</h1>
      {filmPosters.map(function (filmPoster) {
        return filmPoster.ep === filmId ? (
          <img
            key={filmPoster.id}
            className="poster"
            width="250px"
            src={filmPoster.poster}
            alt={filmPoster.title}
            style={{ margin: "20px" }}
          />
        ) : (
          ""
        );
      })}
      <h3>Director: {filmDirector}</h3>
      <p>{filmCrawl}</p>
    </Container>
  );
}

export default FilmDescription;
