import React from 'react'
//recibiendo props

export default function Encabezado({nombre, apellido, }) { 
    return (
        <div>
            <h1>App de Notas</h1>
            {/**Pasando el nombre de una persona de manera dinamica (se va recibir una prop)*/}
            <h3> Bienvenido a nuestra pagina! {nombre} {apellido} </h3>
        </div>
    )
}
