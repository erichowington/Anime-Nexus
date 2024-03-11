import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <div>
      <p>{character.name}</p>
        <Link to={`/characters/${character._id}`}>
          <img src={typeof character.images == "string" ? 
          character.images: character.images[0]} 
          alt={character.name} 
          />
        </Link>
      </div>
    </div>
  );
}

export default Character;
