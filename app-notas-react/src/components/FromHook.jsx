import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

export default function FormHook({listNotes, setListNotes}) {
    const {
        register, //{objeto}
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm()
    /**
     * Register: Almacena y guarda la informacion de las entradas de datos.
     * handleSubmIt: Accion donde se va guardar la informacion.
     * watch: se usa para testear las entradas de datos.
     * reset: limpia las entradas de datos.
     */


    //funcion para guardar la informacion de la nota en el estado
    const saveNote = (data) => {
        //objeto de la informacion del formulario
        console.log(data)
        //actualizando la lista de notas
        //.push() --- spreed operator (...) (copia de los datos)
        //hacemos una copia de las notas anteriores de la lista y agregamos la nueva
        setListNotes([...listNotes, {
            //generamos un id unico para cada nota
            idNote: uuidv4(),
            titleNote: data.title,
            descriptionNote: data.description
        }])

        //limpiamos el formulario
        reset()
    }
    //console.log(watch("title"))
    console.log(listNotes)
    return (
        <div>
            <h3>Registrar Nota</h3>
            <form action="" onSubmit={handleSubmit(saveNote)}>
                <div>
                    <label htmlFor="">Titulo</label>
                    {/* <input type="text" onChange={(e) => handleTitle(e)}/> */}
                    <input type="text" {...register("title",{required: true, maxLength: 25})}/>
                    {/**Manejando errores de validacion */}
                    {errors.title && <span>Este campo es obligatorio y debe de ser de 20 caracteres</span>}
                </div>
 
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" {...register("description", {required:true})}/>
                    {errors.description && <span>Este campo es obligatorio</span>}
                </div>
 
                <div>
                    <input type="submit" value="Guardar Nota"/>
                </div>
            </form>
        </div>
    )
}
