import { useState, useEffect } from "react";
import { getCharacter, deleteCharacter } from "../services/characters.js";
import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
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
      <div className="detailContent">
        <h1 className="characterName">{character.name}</h1>

        {character.images && (
          <img className="detail-image"
            src={
              typeof character.images == "string"
                ? character.images
                : character.images[0]
            }
          />
        )}
        <p className="character-jutsu">JUTSU</p>
        <div className="jutsuItems">
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
        <img className="title-img" src="/images/NEXUS-TITLE.png"/>
        <NavLink className="back"to="/characters">Back</NavLink>
      </div>
    </div>
  );
}

export default CharacterDetail;
