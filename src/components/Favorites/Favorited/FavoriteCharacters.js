import { Carousel, Card } from "react-bootstrap";

import poster from "../../../assets/starwarscharacters.jpg";

function FavoriteCharacters(favoritePeopleArr) {
  // if (favoritePeople.length > 0)
  {
    return (
      <>
        <p>Favorite Characters</p>
        <Carousel>
          {/* {favoritePeopleArr.map((person) => {
            return (
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={poster}></Card.Img>
                  <p>{person.name}</p>
                </Card>
              </Carousel.Item>
            );
          })} */}
        </Carousel>
      </>
    );
  }
  // else {
  //   return <h1>No favorite characters yet</h1>;
  // }
}

export default FavoriteCharacters;
