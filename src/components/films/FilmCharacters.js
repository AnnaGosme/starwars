import { useState } from "react";

import axios from "axios";

import { Accordion, Button, Card, Modal, Image } from "react-bootstrap";

import CharacterPoster from "../characters/CharacterPoster";

function FilmCharacters({ characters, people, favoritePeople }) {
  const [openModal, setOpenModal] = useState(false);
  console.log("people", people);

  const peopleArr = people.map((person) => person);

  const finalArr = [];
  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < peopleArr.length; j++) {
      if (characters[i] === peopleArr[j].url) {
        finalArr.push(peopleArr[j].name);
      }
    }
  }
  console.log("finalArr", finalArr);

  const onClickOpenModal = () => setOpenModal(true);
  const onClickCloseModal = () => setOpenModal(false);

  return (
    <>
      <h3>Characters</h3>
      <div className="container">
        {finalArr.map((p) => (
          <>
            <CharacterPoster />
            <div>
              <Button onClick={onClickOpenModal}>{p}</Button>
              <Modal show={openModal} onHide={onClickCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>{p}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="container">
                    <CharacterPoster />
                    <h3>ADD INFORMATION</h3>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={onClickCloseModal}>Close</Button>
                  <Button
                    onClick={() => {
                      if (!favoritePeople.includes(p)) {
                        favoritePeople.push(p);
                      }
                    }}
                  >
                    Add to favorites
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default FilmCharacters;
