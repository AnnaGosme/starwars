function CharacterDescription(person, homeworld) {
  return (
    <>
      <h2>{person.name}</h2>
      <p>Home Planet: {person.homeworld}</p>
      <p>Height: {person.height} cm</p>
      <p>Weight: {person.mass} kg</p>
      <p>Films: {person.films}</p>
    </>
  );
}

export default CharacterDescription;
