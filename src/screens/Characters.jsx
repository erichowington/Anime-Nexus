import { useState, useEffect } from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";
import "./Characters.css"

function Characters() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacters() {
    const allCharacters = await getCharacters();
    setCharacters(allCharacters);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="characters">
      <h1 className="title">CHARACTERS</h1>
      <div className="characters-container">
        {characters.map((character) => (
          <Character character={character} key={character._id} />
        ))}
      </div>
      <img className="title-img" src="images/NEXUS-TITLE.png"/>
    </div>
  );
}

export default Characters;