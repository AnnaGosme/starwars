import { Figure } from "react-bootstrap";

function CharacterPoster({ portrait }) {
  return (
    <>
      <Figure.Image width={171} src={portrait} alt="portrait"></Figure.Image>
    </>
  );
}

export default CharacterPoster;
