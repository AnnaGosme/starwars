import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import FilmContainer from "./components/films/FilmContainer";
import CharacterContainer from "./components/characters/CharacterContainer";
import FavoritesContainer from "./components/Favorites/Favorited/FavoritesContainer";

function App() {
  return (
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
        <Route path="/favorites">
          <FavoritesContainer />
        </Route>
        <Route path="/characters">
          <CharacterContainer />
        </Route>
        <Route path="/">
          <FilmContainer />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
