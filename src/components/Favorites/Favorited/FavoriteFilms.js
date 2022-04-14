import { Carousel } from "react-bootstrap";

function FavoriteFilms() {
  const favoriteFilms = [
    "Star Wars",
    "Yet Another Star Wars",
    "So many Star Wars",
  ];
  return (
    <Carousel>
      {favoriteFilms.map((film) => {
        return (
          <Carousel.Item>
            <p>{film}</p>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default FavoriteFilms;
