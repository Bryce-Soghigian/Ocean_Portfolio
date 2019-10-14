import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));
width:100%;
height:65px;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:row;
`
const Navitem = styled(Link)`
text-decoration:none;
text-transform:uppercase;
color:#F2F8FD;
text-shadow: 2px 2px 2px black;
:hover{
    text-decoration:underline;
    transform: rotate(10deg);
    font-style: italic;
    
    transition:.5s;
}
@media(max-width:800px){
    
}
@media(max-width:500px){
    font-size: 1rem;
}
@media(max-width:375px){
    font-size: 1rem;
}
`
export default function Navbar() {
    return (


        <NavContainer>
            <Navitem to="/Experience">
            Experience
            </Navitem>
            <Navitem to = "/Projects">
            Projects
            </Navitem>
            <Navitem to = "/Skills">
            Skills
            </Navitem>
            <Navitem to = "/Contact">
            Contact
            </Navitem>
            <Navitem to = "/Resume">
                Resume
            </Navitem>
        </NavContainer>
    )
}
