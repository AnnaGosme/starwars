import FilmDescription from "../Films/FilmDescription";

function FavoriteFilms({ favoriteFilms }) {
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
