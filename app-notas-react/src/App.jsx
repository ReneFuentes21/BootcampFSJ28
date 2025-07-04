//import { useState } from 'react'

import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
//import FormNotas from './components/FormNotas'
import ListaNotas from './components/ListaNotas'
import FormHook from './components/FromHook'

function App() {

  /**
   * 2 Elementos
   * [0] => devolver y guardar el estado
   * [1] => actualiza el estado
   * const [mensaje, setMensaje] = useState("Hola") //inicializa el estado

  */
 //declaramos el estado para la lista de notas 
 const [listNotes, setListNotes] = useState([])
  return (
    <>
    {/**Pasando una prop */}
      <Encabezado nombre="Rene" apellido="Fuentes" />
      {/**Pasando el estado de la lista de notas  */}
      <FormHook listNotes = {listNotes} setListNotes={setListNotes}/>
      <ListaNotas listNotes = {listNotes} setListNotes={setListNotes}/>
    </>
  )
}

export default App
