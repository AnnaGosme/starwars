import {Button} from 'react-bootstrap';

function RemoveFromFavs() {
    function onClickRemoveFromFavs(favorited) {
        console.log(`${favorited} removed from favs`)

        return(
            <>
            <Button onClick={onClickRemoveFromFavs}>Remove from Favorites</Button></>
        )
    }
}

export default RemoveFromFavs;