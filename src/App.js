import React from 'react';
import SmoothScroll from 'smooth-scroll';
import CustomScroll from 'react-custom-scroll';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';

import { ThemeProvider } from "@chakra-ui/core";
import Experience from './Components/experience/Experience';
import Contact from './Components/Contact/Contact';
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

function App() {
 
  return (
    <ThemeProvider>
      <CustomScroll>
    <div className="App">

     
        <NavContainer>
            <Navitem href="#Experience">
            Experience
            </Navitem>
            <Navitem href="#Projects">
            Projects
            </Navitem>
            <Navitem href="#Contact">
            Contact
            </Navitem>
            <A href ="./r.pdf" download="Bryce Soghigian's Resume">Resume</A>
       
        </NavContainer>
      <Intro/>
      <section id="Experience">
      <Experience/>
      </section>

     <section id="Projects"> <Projects 
      id="Projects"
      /></section>
      <section id="Contact"><Contact
       
       /></section>

    </div>
    </CustomScroll>
    </ThemeProvider>
  );
}

export default App;
