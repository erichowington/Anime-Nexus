import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCharacter, editCharacter } from "../services/characters.js";

function CharacterEdit() {
  const [character, setCharacter] = useState({
    name: "",
    images: "",
    jutsu: "",
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

    await editCharacter(character);
    navigate(`/characters/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add A character to our database!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placholder="add characters name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placholder="add image url"
          name="image"
          value={character.images}
          onChange={handleChange}
        />
        <input
          type="text"
          placholder="Jutsu"
          name="jutsu"
          value={character.jutsu}
          onChange={handleChange}
        />
        <div>
          Personal
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
        </div>
        <button type="submit">Create your character!</button>
      </form>
    </div>
  );
}

export default CharacterEdit
