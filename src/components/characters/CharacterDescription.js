function CharacterDescription({ name, mass, height, homePlanet, films }) {
  return (
    <>
      <p>Home Planet: {homePlanet}</p>
      <p>Height: {height} cm</p>
      <p>Weight: {mass} kg</p>
      <p>Films: {films}</p>
    </>
  );
}

export default CharacterDescription;
