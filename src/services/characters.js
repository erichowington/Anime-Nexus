import api from "./apiConfig.js";

const getCharacters = async () => {
    try {
        const response = await api.get("/characters");
        return response.data;
    }catch (error) {
        console.error("Error getting all characters: ", error);
    }
};

export default getCharacters;