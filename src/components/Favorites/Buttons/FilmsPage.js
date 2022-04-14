import { Button } from "react-bootstrap";

function FilmsPage() {
  function onClickFilmsPage() {
    console.log("view films page");
  }

  return (
    <>
      <Button onClic={onClickFilmsPage}>View Films Page</Button>
    </>
  );
}

export default FilmsPage;
