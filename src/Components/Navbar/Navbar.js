import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
const Navitem = styled(AnchorLink)`
text-decoration:none;
text-transform:uppercase;
color:#F2F8FD;
text-shadow: 2px 2px 2px black;
:hover{
    text-decoration:underline;
    transform: rotate(3deg);
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
const A = styled.a`
text-decoration:none;
text-transform:uppercase;
color:#F2F8FD;
text-shadow: 2px 2px 2px black;
:hover{
    text-decoration:underline;
    transform: rotate(3deg);
    font-style: italic;
    
    transition:.5s;
}
`
export default function Navbar() {
    return (
        // to="section1"
        // spy={true}
        // smooth={true}
        // offset={-70}
        // duration= {500}

        <NavContainer>
            <Navitem href="Experience">
            Experience
            </Navitem>
            <Navitem href="Projects">
            Projects
            </Navitem>
            <Navitem href="Contact">
            Contact
            </Navitem>
            <A href ="./r.pdf" download="Bryce Soghigian's Resume">Resume</A>
       
        </NavContainer>
    )
}
