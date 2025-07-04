import React from 'react'
import styled from 'styled-components'
import { IoIosNotifications } from "react-icons/io";
import { FaHome } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ListaBooks  from './ListaBooks'
import Welcome from './Welcome';
import FormRegister from './FormRegister';
import EditBook from './EditBook';


const Header = styled.header `
    color: #fff;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #fff;
    display:flex;
    justify-content: space-around;
`
const TitleHeader = styled.h1 `
    font-weight: bold;
    font-size: 32px;
`
const ItemNav = styled.li`
    display: inline-block;
    margin: 0 1rem;
`

export default function Menu() {

    return (
    <BrowserRouter>
        <Header>
            <TitleHeader><Link to="/" style={{color:"#fff"}}>Books FSJ28</Link> 
            </TitleHeader>
                <nav>
                <ul>
                    <ItemNav><Link to="/" style={{color:"#fff"}}><FaHome style={{fontSize:"32px"}}/></Link></ItemNav>
                    <ItemNav><Link to="/books" style={{color:"#fff", textDecoration:"none"}}>Books</Link></ItemNav>
                    <ItemNav><Link to="/register " style={{color:"#fff", textDecoration:"none"}}>Register Book</Link>
                    </ItemNav>
                    <ItemNav>Community</ItemNav>
                    <ItemNav><IoIosNotifications style={{fontSize:"32px"}}/>
                    </ItemNav>
                </ul>
            </nav>
        </Header>
        {/**Declarando un contenedor para las rutas de la aplicacion */}
        <Routes>
            {/**Creando rutas */}
            <Route path='/' element={<Welcome/>} />
            <Route path='/books' element={<ListaBooks/>} />
            <Route path='/register' element={<FormRegister/>}/>
            {/**Ruta con parametro */}
            <Route path='/book/edit/:id_book' element={<EditBook/>}/>
        </Routes>
    </BrowserRouter>
    )
}
