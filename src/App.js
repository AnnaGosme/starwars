import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import NavBar from "./NavBar";
import FilmContainer from "./components/films/FilmContainer";
import FavoritesContainer from "./components/favorites/Favorited/FavoritesContainer";
import logo from "./assets/logo.jpg";

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
      <img src={logo} alt="Star Wars"></img>
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
