import { useState, useEffect } from "react";
import { getCharacter, deleteCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function CharacterDetail() {
  const [character, setCharacter] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchCharacter = async () => {
    const oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  const handleDelete = async () => {
    await deleteCharacter(id);
    navigate("/characters");
  };

  return (
    <div>
      <h1>{character.name}</h1>
     
      {character.images && <img src={
        typeof character.images == "string" ? 
        character.images: character.images[0]
      } /> }
      <p>JUTSU</p>
        {character?.jutsu?.length > 0 && character.jutsu.map((jut) => (
          <p>{jut}</p>
        ))}
      {/* <p>{character.personal.birthdate}</p>
      <p>{character.personal.sex}</p>
      <p>{character.personal.status}</p> */}
      <div>
        <Link to={`/characters/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default CharacterDetail;
