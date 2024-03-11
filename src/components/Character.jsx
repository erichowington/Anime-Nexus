import { Link } from "react-router-dom";
import style from "./CharacterComponent.css"

function Character({ character }) {
  return (
    <div>
      <div>
        <Link to={`/characters/${character._id}`}>
          <img className="icon" src={typeof character.images == "string" ? 
          character.images: character.images[0]} 
          alt={character.name} 
          />
        </Link>
      </div>
    </div>
  );
}

export default Character;
