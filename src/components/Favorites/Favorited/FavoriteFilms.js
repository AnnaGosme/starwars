import { Carousel, Card, Button } from "react-bootstrap";

import poster from "../../../assets/starwarsposter.jpg";

function FavoriteFilms({ favoriteFilms }) {
  const favoriteFilmsArr = Object.values(favoriteFilms);
  console.log(favoriteFilmsArr);
  // if (favoriteFilms.length > 0)
  {
    return (
      <Carousel>
        <p>Favorite Films</p>
        {favoriteFilmsArr.map((film) =>
          film.map((f) => {
            return (
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={poster}></Card.Img>
                  <p>{f.title}</p>
                  <p>{f.director}</p>
                  {/* <Button
                    onClick={() => {
                      favoriteFilmsArr.filter(function (value) {
                        return value.title !== film.title;
                      });
                    }}
                  >
                    Remove from Favorites
                  </Button> */}
                </Card>
              </Carousel.Item>
            );
          })
        )}
      </Carousel>
    );
  }
  // else {
  //   return <h1>No favorite films yet</h1>;
  // }
}

export default FavoriteFilms;
