import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    color: #fff;
    margin: 2.5rem;
    gap: 1rem;
`
const Title = styled.h2`
    font-weight: blod;
    font-size: 3rem;

`
const ImgBook = styled.img`
    width: 75%;
`

export default function Welcome() {
    return (
        <Container>
            <section>
                <ImgBook src='https://lh3.googleusercontent.com/aida-public/AB6AXuDFl-MQEvM9JyH9FkIp_iMpuioHyRCJVss-saq7qyN7sXl9DNtNE9dC_BWnaO1GtZ9O-MVqwzulMgXU9zwL5HtNkU6EwcABaYFpJ7h4z3hAU0_miBGJlapjEXSd6PFe94LOBP87tTjmOxYrMpUxYlo6kc1Qg2wxs9_GCbU5OEU8xl4ltPxeSzjboC_H_L3i5picVeqSaGA5bmPtk8n9emmLOgAxROtHuHddjauulUMcPaAHFSFQOMsxD1p-nD9TlV6HOa--kYDwoHg' alt='books fsj28'/>
            </section>
            
            <section>
                <Title>Discover Your Next Great Read </Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil temporibus magni, at fugit dolores autem? Soluta, hic cupiditate quibusdam recusandae aliquid dicta veritatis esse eaque. 
                    Voluptatem ad deleniti cupiditate?</p>
                {/**Redireccionar a la lista de los libros */}
                <Link to="/books">Ir a los libros</Link>

            </section>
        </Container>
    )
}
