import {Button} from 'react-bootstrap';

function AddToFavs() {

    function onClickAddToFavs(favorited) {
        console.log(`${favorited} added to favorites`)
    }


    return(
        <>
        <Button onClick={onClickAddToFavs}>Add to Favorites</Button></>
    )
}

export default AddToFavs;