function CharacterDescription({ person, mass, height, homeworld, films }) {
  return (
    <>
      <h2>{person}</h2>
      <li>Home planet: {homeworld}</li>
      <li>Height: {height} cm</li>
      <li>Mass: {mass} kg</li>
      <li>Films: {films}</li>
    </>
  );
}

export default CharacterDescription;
