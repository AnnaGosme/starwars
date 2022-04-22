import { useState } from "react";
import { Card, Button, Carousel, Container, Row } from "react-bootstrap";
import { useAlert } from "react-alert";

import FilmCharacters from "./FilmCharacters";
import FilmDescription from "./FilmDescription";

import helpers from "../../helpers/helpers";

function FilmContainer({
  planets,
  films,
  favoriteFilms,
  people,
  favoritePeople,
}) {
  const [index, setIndex] = useState(0);

  const alert = useAlert();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {films.map((film) => {
          return (
            <Carousel.Item data-testid="film" key={film.episode_id}>
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
                    <Button
                      variant="warning"
                      size="md"
                      active
                      onClick={() => {
                        helpers.addFav(favoriteFilms, film);
                        alert.show(`${film.title} added to Favorites`);
                      }}
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
