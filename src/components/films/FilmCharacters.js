import { useEffect, useState } from "react";

import axios from "axios";

import { Accordion, Button, Card, Modal, Image } from "react-bootstrap";

import PeopleModal from "../../helpers/PeopleModal";
import CharacterPoster from "../characters/CharacterPoster";
import CharacterDescription from "../characters/CharacterDescription";
import CharacterContainer from "../characters/CharacterContainer";

import helpers from "../../helpers/helpers";
import charactersPortraits from "../../assets/characters/characters";

function FilmCharacters({ filmCharacters, people, favoritePeople, planets }) {
  const [openModal, setOpenModal] = useState(false);
  const [person, setPerson] = useState(null);

  const finalArr = [];

  helpers.matchInfo("url", filmCharacters, people, finalArr);

  console.log("finalArr", finalArr);
  console.log("planets", planets);

  function matchInfo(arr1, arr2, finalArr) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j].url) {
          finalArr.push(arr2[j]);
        }
      }
    }
    return finalArr;
  }

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
              <div>
                <Button
                  variant="warning"
                  onClick={() => {
                    onClickOpenModal(person);
                    console.log("open modal");
                  }}
                >
                  {person.name}
                </Button>
              </div>
              {/* {charactersPortraits.name.indexOf(p)} */}
              <CharacterPoster />
              <div>
                <p>
                  Homeworld:{" "}
                  {planets.map(function (planet) {
                    if (planet.url === person.homeworld) {
                      console.log(`${person.name} comes from ${planet.name}`);
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
