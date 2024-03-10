import { Link } from "react-router-dom";

function Character({ character }) {
    return (
        <div>
            <div>
                <Link to={`/characters/${character._id}`}>

                </Link>
            </div>
        </div>
    )
};

export default Character;