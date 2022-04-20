import { useState } from "react";
import { Card, Button, Carousel, Container, Row, Col } from "react-bootstrap";

import FilmCharacters from "./FilmCharacters";
import FilmDescription from "./FilmDescription";

import helpers from "../../helpers/helpers";

function FilmContainer({
  planets,
  filmsArr,
  favoriteFilms,
  people,
  favoritePeople,
}) {
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const addToFavorites = (film) => {
    setFavorites((prevFavourites) => [...prevFavourites, film]);
    console.log("its work?");
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {filmsArr.map((film) => {
          return (
            <Carousel.Item>
                <Container>
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
                    <Col>
                  <Button
                    variant="danger"
                    onClick={() => helpers.addFav(favoriteFilms, film)}
                  >
                    Add to Favorites
                  </Button>
                  </Col>
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
    </>
  );
}

export default FilmContainer;
