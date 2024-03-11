import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <div>
        <Link to={`/characters/${character._id}`}>
          <img src={character.images[0]} alt={character.name} />
        </Link>
      </div>
    </div>
  );
}

export default Character;
