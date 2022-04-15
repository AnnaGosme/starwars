import { useEffect, useState } from "react";

import axios from "axios";

import { Accordion, Button, Card, Modal, Image } from "react-bootstrap";

import PeopleModal from "../../helpers/PeopleModal";
import CharacterPoster from "../characters/CharacterPoster";
import CharacterDescription from "../characters/CharacterDescription";
import CharacterContainer from "../characters/CharacterContainer";

import helpers from "../../helpers/helpers";

function FilmCharacters({ characters, people, favoritePeople }) {
  const [openModal, setOpenModal] = useState(false);
  const [person, setPerson] = useState(null);

  const peopleArr = people.map((person) => person);

  const finalArr = [];
  function findFilmCharacters() {
    for (let i = 0; i < characters.length; i++) {
      for (let j = 0; j < peopleArr.length; j++) {
        if (characters[i] === peopleArr[j].url) {
          finalArr.push(Object.values(peopleArr[j]));
        }
      }
    }
  }

  findFilmCharacters();

  const onClickOpenModal = (p) => {
    console.log("modal clicked for this person", p)
    setPerson(p);
    setOpenModal(true);
  };

  const onClickCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className="container">
        {finalArr.map((p) => (
          <>
          <div className="temp_solution">
            <div>
              <Button onClick={() => onClickOpenModal(p)}>{p[0]}</Button>
            </div>
          <CharacterPoster />
          <div>
          <p>Home planet: {p[9]}</p>
          <p>Height: {p[1]} cm</p>
          <p>Mass: {p[2]} kg</p>
          <p>Gender: {p[7]}</p>
          </div>
        </div>
          </>
        ))}
      <PeopleModal person={finalArr.map(p => p)} openModal={openModal} onClickCloseModal={onClickCloseModal} favoritePeople={favoritePeople}/>
      </div>
      
    </>
  );
}

export default FilmCharacters;
