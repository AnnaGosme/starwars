function FilmDescription({ description, director, characters }) {
  return (
    <>
      <h3>Director: {director}</h3>
      <p>{description}</p>
    </>
  );
}

export default FilmDescription;
