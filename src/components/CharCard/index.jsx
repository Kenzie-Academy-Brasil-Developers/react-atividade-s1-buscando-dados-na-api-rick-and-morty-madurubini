import "./style.css";
function CharCard({ char }) {
  const status = char.status;

  return (
    <div className={status}>
      <label>{char.name}</label>
      <img src={char.image} alt={char.name}></img>
      <p> Espécie: {char.species}</p>
    </div>
  );
}

export default CharCard;
