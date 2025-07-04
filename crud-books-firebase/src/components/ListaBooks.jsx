import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dbStore } from '../firebase/appConfig'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function ListaBooks() {
    //estado para mostrar la lista de libros
    const [books, setBooks] = useState([])

    useEffect(() =>{
        //mostrar los libros a tiempo real
        
        //devolviendo los datos en tiempo real
        onSnapshot(
            collection(dbStore,"books"),
            //funcion que nos devuelva la info de los libros
            (snapshot) => {
                //accediendo al primer documento de la base de datos
                console.log(snapshot.docs);
                console.log(snapshot.docs[0].data())

                //mapeando la lista de los libros
                const array_books = snapshot.docs.map((doc) => {
                    //pasando el arreglo al estado
                    return {...doc.data(), id: doc.id}
                })

                //actualizamos el estado con el arreglo que acabamos de crear
                setBooks(array_books)
            }
        )

    }, [])
    //el arreglo vacio indica que solo se ejecuta una vez
    //cuando el arreglo conlleva datos significa que el efecto se hace por una dependencia
    console.log(books)

    //funcion para eliminar un libro
    const deleteBook = async (id_book) => {
        //console.log(id_book)
            Swal.fire({
                title: "Estas seguro?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    deleteDoc(doc(dbStore, "books", id_book));
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                }
            });
    }
    
    
    return (
        <div>
            <section>
                {
                    books.map((book, index) => {
                        return(
                            <div key={index} style={{color: "#fff", margin: "1rem"}}>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <p><strong>Genero: </strong>{book.gender}</p>
                                <Link to={`/book/edit/${book.id}`}>Editar</Link>
                                <button onClick={() => deleteBook(book.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
