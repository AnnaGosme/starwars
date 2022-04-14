import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

import FilmPoster from "./FilmPoster";
import FilmDescription from "./FilmDescription";
import AddToFavs from "../favorites/Buttons/AddToFavs";

function FilmContainer() {
  const [films, setFilms] = useState({});

  function fetchStarWarsFilms() {
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => {
        setFilms(res.data.results);
      })
      .catch((error) =>
        console.log(`Error fetching Starwars movies: ${error}`)
      );
  }

  useEffect(() => {
    fetchStarWarsFilms();
  }, []);

  const filmsArr = Object.values(films);

  return (
    <>
      FILM CONTAINER
      {filmsArr.map((film) => {
        return (
          <div key={film.id}>
            <h1>{film.name}</h1>
            <div className="container">
              <FilmPoster poster={film.poster} />
              <Card>
                <FilmDescription
                  description={film.opening_crawl}
                  director={film.director}
                  characters={film.characters}
                />
                <AddToFavs />
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default FilmContainer;
