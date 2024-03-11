import { useState, useEffect } from "react";
import { getCharacter, deleteCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CharacterDetails.css";

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
    <div className="character-details">
      <div className="content">
        <h1 className="character-name">{character.name}</h1>

        {character.images && (
          <img
            src={
              typeof character.images == "string"
                ? character.images
                : character.images[0]
            }
          />
        )}
        <p className="character-jutsu">JUTSU</p>
        <div className="jutsu-items">
          {character?.jutsu?.length > 0 &&
          character.jutsu.map((jut) => <p>{jut}</p>)}
          {/* <p>{character.personal.birthdate}</p>
          <p>{character.personal.sex}</p>
          <p>{character.personal.status}</p> */}
        </div>
        <div>
          <Link to={`/characters/${id}/edit`}>
            <button className="edit">EDIT</button>
          </Link>
          <button className="delete" onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
