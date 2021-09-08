import CharCard from "../CharCard";

function Characters({ characters }) {
  return (
    <div>
      {characters.map((char) => (
        <CharCard key={char.id} char={char} />
      ))}
    </div>
  );
}

export default Characters;
