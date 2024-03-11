import { Link } from "react-router-dom";
import "./CharacterComponent.css"

function Character({ character }) {
  return (
    <div>
      <div className="image-container">
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
