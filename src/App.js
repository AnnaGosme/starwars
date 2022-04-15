import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import FilmContainer from "./components/films/FilmContainer";
import CharacterContainer from "./components/characters/CharacterContainer";
import FavoritesContainer from "./components/favorites/Favorited/FavoritesContainer";

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
  // console.log("fav peopple in App", favoritePeople);
  // console.log("fav films in App", favoriteFilms);

  return (
    <div className="App">
      <h1>STAR WARS</h1>
      <h1>the films</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Films</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
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
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
