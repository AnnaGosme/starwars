import { useState, useEffect } from "react";
import { Card, Button, Carousel, Container, Row, Col } from "react-bootstrap";

import FilmCharacters from "./FilmCharacters";
import FilmDescription from "./FilmDescription";

import helpers from "../../helpers/helpers";

function FilmContainer({
  planets,
  // filmsArr,
  favoriteFilms,
  people,
  favoritePeople,
}) {
  const [index, setIndex] = useState(0);
  const [films, setFilms] = useState({});

  useEffect(() => {
    helpers.fetch("https://swapi.dev/api/films/", setFilms);
  }, []);

  const filmsArr = Object.values(films);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {filmsArr.map((film) => {
          return (
            <Carousel.Item data-testid="film">
              <Container >
                <Card body>
                  <Row>
                    <FilmDescription
                      filmTitle={film.title}
                      filmId={film.episode_id}
                      filmDirector={film.director}
                      filmCrawl={film.opening_crawl}
                    />
                  </Row>
                  <Row>
                    <Button
                      variant="danger"
                      size="lg"
                      active
                      onClick={() => helpers.addFav(favoriteFilms, film)}
                    >
                      Add to Favorites
                    </Button>
                  </Row>
                  <Row>
                    <FilmCharacters
                      filmCharacters={film.characters}
                      people={people}
                      favoritePeople={favoritePeople}
                      planets={planets}
                    />
                  </Row>
                </Card>
              </Container>
            </Carousel.Item>
       
          );
        })}
      </Carousel>
    </div>
  );
}

export default FilmContainer;
