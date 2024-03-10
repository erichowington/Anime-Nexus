import { useState, useEffect } from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";

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
    <div>
      <h1 className="all-characters">All the characters!</h1>
      <div className="characters-container">
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </div>
    </div>
  );
}

export default Characters;