import { Figure } from "react-bootstrap";

function CharacterPoster() {
  const portrait =
    "https://i.pinimg.com/564x/56/a6/c3/56a6c3ad6df40af7583d2536e12639e5.jpg";

  return (
    <>
      <Figure.Image width={171} src={portrait} alt="portrait"></Figure.Image>
    </>
  );
}

export default CharacterPoster;
