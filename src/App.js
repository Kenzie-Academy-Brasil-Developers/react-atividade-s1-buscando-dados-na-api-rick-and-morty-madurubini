import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(characterList);

  return (
    <div className="App">
      <h1>Rick and Morty API</h1>
      <p>
        Abaixo os personagens principais do desenho mais legal da Atualidade
      </p>
      <div className="Container">
        <Characters characters={characterList} />
      </div>
      <p>
        Consuma essa API em{" "}
        <a href="https://rickandmortyapi.com/api/character/">
          {" "}
          https://rickandmortyapi.com/api/character/
        </a>
      </p>
    </div>
  );
}

export default App;
