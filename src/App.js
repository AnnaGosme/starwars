import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import NavBar from "./NavBar";
import FilmContainer from "./components/films/FilmContainer";
import CharacterContainer from "./components/characters/CharacterContainer";
import FavoritesContainer from "./components/favorites/Favorited/FavoritesContainer";

import Test from "./components/films/Testing";

function App() {
  const [films, setFilms] = useState({});
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const favoriteFilms = [];
  const favoritePeople = [];

  function fetch(url, setArray) {
    axios
      .get(url)
      .then((res) => {
        setArray(res.data.results);
      })
      .catch((error) => console.log(`Error fetching: ${error}`));
  }

  useEffect(() => {
    fetch("https://swapi.dev/api/films/", setFilms);
    fetch("https://swapi.dev/api/people/", setPeople);
    fetch("https://swapi.dev/api/planets/", setPlanets);
  }, []);

  const filmsArr = Object.values(films);

  return (
    <div className="App">
      {/* <Test people={people} films={films}/> */}
      <h1>STAR WARS</h1>
      <h1>the films</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/favorites"
            element={
              <FavoritesContainer
                favoriteFilms={favoriteFilms}
                favoritePeople={favoritePeople}
              />
            }
          ></Route>
          <Route
            exact
            path="/characters"
            element={
              <CharacterContainer
                favoritePeople={favoritePeople}
                people={people}
                homeworld={planets}
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <FilmContainer
                filmsArr={filmsArr}
                favoriteFilms={favoriteFilms}
                favoritePeople={favoritePeople}
                people={people}
                planets={planets}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
