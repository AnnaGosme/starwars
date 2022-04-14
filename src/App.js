import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import FilmContainer from "./components/films/FilmContainer";
import CharacterContainer from "./components/characters/CharacterContainer";
import FavoritesContainer from "./components/favorites/Favorited/FavoritesContainer";

function App() {
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
            element={<FavoritesContainer />}
          ></Route>
          <Route
            exact
            path="/characters"
            element={<CharacterContainer />}
          ></Route>
          <Route exact path="/" element={<FilmContainer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
