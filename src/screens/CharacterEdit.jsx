import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter, editCharacter } from "../services/characters.js";
import "./CharacterEdit.css"

function CharacterEdit() {
  const [character, setCharacter] = useState({
    name: "",
    images: "",
    jutsu: [],
    personal: {
      birthdate: "",
      sex: "",
      status: "",
    },
  });

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchCharacter() {
    const oneCharacter = await getCharacter(id);
    setCharacter(oneCharacter);
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editCharacter(id, character);
    navigate(`/characters/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "images") {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value,
      }));
    } else {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        personal: {
          ...prevCharacter.personal,
          [name]: value
        },
      }));
    }
  };

  return (
    <div className="form-wrapper">
      <h1 className="edit-header">Character Editor</h1>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <p className="form-name">Name</p>
          <input
            type="text"
            placholder="add characters name"
            name="name"
            value={character.name}
            onChange={handleChange}
          />
          <p className="form-photo">Photo</p>
          <input
            type="text"
            placholder="add image url"
            name="image"
            value={character.images}
            onChange={handleChange}
          />
          <p className="jutsu">Jutsu</p>
          <input
            type="text"
            placholder="Jutsu"
            name="jutsu"
            value={character.jutsu}
            onChange={handleChange}
          />
          <p className="form-personal">Personal</p>
            <input
              type="text"
              placholder="Birthdate"
              name="birthdate"
              value={character.personal.birthdate}
              onChange={handleChange}
            />
            <input
              type="text"
              placholder="Sex"
              name="sex"
              value={character.personal.sex}
              onChange={handleChange}
            />
            <input
              type="text"
              placholder="Status"
              name="status"
              value={character.personal.status}
              onChange={handleChange}
            />
          
          <button className="form-button" type="submit">Edit your character!</button>
        </form>
      </div>
    </div>
  );
}

export default CharacterEdit
