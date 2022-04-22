import { Card } from "react-bootstrap";
import FilmDescription from "../films/FilmDescription";

function FavoriteFilms({ favoriteFilms }) {
  return (
    <>
      <h2>Favorite Films</h2>

      {favoriteFilms.map((film) => {
        return (
          <Card>
            <FilmDescription
              filmTitle={film.title}
              filmId={film.episode_id}
              filmDirector={film.director}
              filmCrawl={film.opening_crawl}
            />
          </Card>
        );
      })}
    </>
  );
}

export default FavoriteFilms;
