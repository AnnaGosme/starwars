import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container, Spinner } from "react-bootstrap";

import "./App.css";
import NavBar from "./NavBar";
import FilmContainer from "./components/films/FilmContainer";
import FavoriteCharacters from "./components/favorites/FavoriteCharacters";
import FavoriteFilms from "./components/favorites/FavoriteFilms";
import logo from "./assets/logo.jpg";
import helpers from "./helpers/helpers";

function App() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const favoriteFilms = [];
  const favoritePeople = [];

  useEffect(() => {
    helpers.fetch("https://swapi.dev/api/films/", setFilms);
    helpers.fetch("https://swapi.dev/api/people/", setPeople);
    helpers.fetch("https://swapi.dev/api/planets/", setPlanets);
  }, []);

  return (
    <Container className="container">
      <img src={logo} alt="Star Wars"></img>
      <h1 labelfor="the films">the films</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/favorite-films"
            element={<FavoriteFilms favoriteFilms={favoriteFilms} />}
          ></Route>
          <Route
            exact
            path="/favorite-characters"
            element={
              <FavoriteCharacters
                favoritePeople={favoritePeople}
                planets={planets}
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <FilmContainer
                films={films}
                favoriteFilms={favoriteFilms}
                favoritePeople={favoritePeople}
                people={people}
                planets={planets}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
