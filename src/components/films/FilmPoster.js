import {Image} from 'react-bootstrap'

function FilmPoster({poster}) {
    return (
        <Image
      className="thumbnail"
      src={poster}
      alt="Star Wars"
      ></Image>
    )
};

export default FilmPoster;