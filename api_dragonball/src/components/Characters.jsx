import React, { use, useEffect, useState } from 'react'
import { getAll } from '../services/characterService'

export default function Characters({favorites, setFavorites}) {
    const [characters, setCharacters] = useState([]);

    const toggleFavorite = (data_character) => {
        console.log(data_character)
        //verificamos si el personaje ya existe
        const findCharacter = favorites.find((character) => data_character.id == character.id)
        if(findCharacter){
            //se quita
            setFavorites(favorites.filter((favorite) => favorite.id != data_character.id))
        }else{
            setFavorites([...favorites, data_character])
        }
        //actualizando el estado de favoritos con el personaje que el usuario agrego
        
        
        alert("agregado")
    }
console.log(favorites)
    useEffect(() =>{
        const getCharacters = async () =>{
            const response = await getAll();
            console.log(response.data.items);
            //actualizando el estado de los personajes
            setCharacters(response.data.items)
        }
        getCharacters()

    },[])

    return (
    <div>
        <h3>Lista de Personajes</h3>
        <div>
            {
                characters.map((character) =>{
                    return(
                        <section key={character.id}>
                            <h1>{character.name}</h1>
                            <img src={character.image} alt={character.img} style={{width:"30%"}} />
                            <p><b>El ki de este personaje es: </b>{character.ki}</p>
                            <button onClick={() => toggleFavorite(character.id)}>Agregar a favoritos</button>
                        </section>
                    )
                })
            }
        </div>
    </div>
  )
}
