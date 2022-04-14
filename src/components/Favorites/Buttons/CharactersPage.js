import { Button } from "react-bootstrap";

function CharactersPage() {
  function onClickCharactersPage() {
    console.log("view characters page");
  }

  return (
    <>
      <Button onClic={onClickCharactersPage}>View Characters Page</Button>
    </>
  );
}

export default CharactersPage;
