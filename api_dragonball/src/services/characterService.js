import axios from "axios";


//metodo que obtenga todos los personajes de la API
const getAll= async () => {
    //tipo de peticiones HTTP: GET, PUT, PATCH, DELETE
    try{
        const response = await axios.get("https://dragonball-api.com/api/characters");
        return response;
    }catch(error){
        alert(`Error al obtener los datos`, error)
    }
}

export { getAll }