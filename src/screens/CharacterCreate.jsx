import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/characters.js";
import "./CharacterCreate.css";

function CharacterCreate() {
  const [character, setCharacter] = useState({
    name: "",
    images: "",
    jutsu: [""],
    personal: {
      birthdate: "",
      sex: "",
      status: "",
    },
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "images") {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value,
      }));
    } else if (name === "jutsu") {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: [value],
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
      <img className="create-title-img" src="/images/NEXUS-TITLE.png"/>
        <h1 className="create-header">Add your favorite character!</h1>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <p className="form-name">Name</p>
            <input
              type="text"
              placeholder="add characters name"
              name="name"
              value={character.name}
              onChange={handleChange}
              
            />
            <p className="form-photo">Photo</p>
            <input
              type="text"
              placeholder="add image url"
              name="images"
              value={character.images}
              onChange={handleChange}
            />
            <p className="form-jutsu">Jutsu</p>
            <input
              type="text"
              placholder="Jutsu"
              name="jutsu"
              value={character.jutsu[0]}
              onChange={handleChange}
            />
            <p className="form-personal">Personal</p>
              <input
                type="text"
                placeholder="Birthdate"
                name="birthdate"
                value={character.personal.birthdate}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Sex"
                name="sex"
                value={character.personal.sex}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Status"
                name="status"
                value={character.personal.status}
                onChange={handleChange}
              />
          <button className="form-button" type="submit">Create your character!</button>
        </form>
      </div>
    </div>
  );
}

export default CharacterCreate;
