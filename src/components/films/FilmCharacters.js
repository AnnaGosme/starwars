import { useEffect, useState } from "react";

import axios from "axios";

import { Accordion, Button, Card, Modal, Image } from "react-bootstrap";

import PeopleModal from "../../helpers/PeopleModal";

import helpers from "../../helpers/helpers";
import charactersPortraits from "../../assets/characters/characters";

function FilmCharacters({ filmCharacters, people, favoritePeople, planets }) {
  const [openModal, setOpenModal] = useState(false);
  const [person, setPerson] = useState(null);

  const finalArr = [];

  helpers.matchInfo("url", filmCharacters, people, finalArr);

  const onClickOpenModal = (p) => {
    setPerson(p);
    setOpenModal(true);
  };

  const onClickCloseModal = () => setOpenModal(false);

  return (
    <>
      <div className="container">
        {finalArr.map((person) => (
          <>
            <div className="temp_solution">
              <div className="container_column">
                {charactersPortraits.map(function (filmCharacter) {
                  if (filmCharacter.name === person.name) {
                    return (
                      <img
                        className="poster"
                        width={100}
                        src={filmCharacter.portrait}
                        alt={filmCharacter.name}
                      />
                    );
                  }
                })}
                <Button
                  variant="dark"
                  onClick={() => {
                    onClickOpenModal(person);
                    console.log("open modal");
                  }}
                >
                  {person.name}
                </Button>
              </div>
              <div>
                <p>
                  Homeworld:{" "}
                  {planets.map(function (planet) {
                    if (planet.url === person.homeworld) {
                      return <>{planet.name}</>;
                    }
                  })}
                </p>

                <p>Height: {person.height} cm</p>
                <p>Mass: {person.mass} kg</p>
                <p>Gender: {person.gender}</p>
              </div>
            </div>
          </>
        ))}
        <PeopleModal
          person={finalArr.map((person) => person)}
          openModal={openModal}
          onClickCloseModal={onClickCloseModal}
          favoritePeople={favoritePeople}
        />
      </div>
    </>
  );
}

export default FilmCharacters;
