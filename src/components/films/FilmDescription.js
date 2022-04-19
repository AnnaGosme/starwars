import filmPosters from "../../assets/films/films";

function FilmDescription({ filmTitle, filmId, filmDirector, filmCrawl }) {
  return (
    <>
      <p>{filmTitle}</p>
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
              ></img>
            );
          }
        })}
        <h3>{filmDirector}</h3>
        <p>{filmCrawl}</p>
      </div>
    </>
  );
}

export default FilmDescription;
