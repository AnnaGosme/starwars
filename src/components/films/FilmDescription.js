

function FilmDescription({description, director, characters}) {
  return (
      <>
      <h3>Director: {director}</h3>
      <p>{description}</p>
      <p>Characters: {characters}</p>
      </>
  )
}

export default FilmDescription;
