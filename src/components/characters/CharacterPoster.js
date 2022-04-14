import {Image} from 'react-bootstrap'

function CharacterPoster({portrait}) {
    return (
        <>
        <Image src={portrait} alt="portrait"></Image>
        </>
    )
}

export default CharacterPoster;