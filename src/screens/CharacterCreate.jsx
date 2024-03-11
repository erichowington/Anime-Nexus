import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCharacter } from "../services/characters.js";

function CharacterCreate() {
  const [character, setCharacter] = useState({
    name: "",
    images: "",
    jutsu: ["Cool Jutsu", "Other cool Jutsu"],
    personal: {
      birthdate: "",
      sex: "",
      status: "",
    },
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCharacter(character);
    navigate("/characters");
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
    <div>
      <h1>Add A Character to our Database!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add characters name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="add image url"
          name="images"
          value={character.images}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          placholder="Jutsu"
          name="jutsu"
          value={character.jutsu}
          onChange={handleChange}
        /> */}
        <div>
          Personal
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
        </div>
        <button type="submit">Create your character!</button>
      </form>
    </div>
  );
}

export default CharacterCreate;
