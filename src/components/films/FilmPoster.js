import { Figure } from "react-bootstrap";

function FilmPoster({ poster }) {
  return <Figure.Image width={171}
   src={poster} alt="Star Wars"></Figure.Image>;
}

export default FilmPoster;
