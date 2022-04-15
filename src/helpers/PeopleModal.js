import { Modal, Button } from "react-bootstrap";

import helpers from "./helpers";

function PeopleModal({ person, openModal, onClickCloseModal, favoritePeople }) {
  console.log("person", person);
  return (
    <>
      {person.map((p) => {
        <Modal show={openModal} onHide={onClickCloseModal}>
        <>
          <Modal.Header closeButton>
            <Modal.Title>NAME{p[0]}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <li>Home planet: {p}</li>
              <li>Height: {p} cm</li>
              <li>Mass: {p} kg</li>
              <li>Films: {p}</li>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onClickCloseModal}>Close</Button>
            <Button onClick={helpers.addFav(favoritePeople, person)}>
              Add to favs
            </Button>
          </Modal.Footer>
          </>
      </Modal>;
      })}
    </>
  );
}

export default PeopleModal;
