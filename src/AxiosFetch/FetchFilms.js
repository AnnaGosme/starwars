import { useState, useEffect } from "react";
import axios from "axios";

function FetchFilms() {
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
}

export default FetchFilms;
