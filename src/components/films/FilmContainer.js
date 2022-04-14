import axios from "axios";
import { Card, Image } from "react-bootstrap";

import FilmPoster from "./FilmPoster";
import FilmDescription from "./FilmDescription";
import AddToFavs from "../Favorites/Buttons/AddToFavs";


function FilmContainer() {
  const films = [
    {
      id: 1,
      name: "Star Wars",
      director: "George Lucas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      characters: ["Luke", "Leia", "Vader"],
      poster: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Another Star Wars",
      director: "George Lucas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      characters: ["Luke", "Leia", "Vader"],
      poster: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Star Wars Again",
      director: "George Lucas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      characters: ["Luke", "Leia", "Vader"],
      poster: "https://picsum.photos/200",
    },
  ];
  return (
    <>
      FILM CONTAINER
      {films.map((film) => {
        return (
          <div key={film.id}>
            <h1>{film.name}</h1>
            <div className="container">
              <FilmPoster poster={film.poster} />
              <Card>
                <FilmDescription
                  description={film.description}
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
