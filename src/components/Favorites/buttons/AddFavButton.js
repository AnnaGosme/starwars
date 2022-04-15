import { Button } from "react-bootstrap";

function AddFavButton(favoritePeople, p) {

  function onClickAddFav(array, fav) {
    if (!array.includes(fav)) {
      array.push(fav);
    }
  }
  return <Button onClick={onClickAddFav}>Add to Favorites</Button>;
}

export default AddFavButton;
