import React from 'react';
import SmoothScroll from 'smooth-scroll';
import CustomScroll from 'react-custom-scroll';
import {FaAngleDoubleDown} from "react-icons/fa";
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
const ScrollDiv = styled.div`
display:flex;
justify-content:center;
border:black;
border-width: 3px;
z-index:4;
align-items:center;
  height: 60px;
  width: 100%;
  background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));

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
            <A href ="r.pdf" download>Resume</A>
       
        </NavContainer>
      <Intro/>
      <ScrollDiv>
     
<Navitem href="#Experience"><FaAngleDoubleDown/></Navitem>
     </ScrollDiv>
      <section id="Experience">
      <Experience/>
      <ScrollDiv>
           <Navitem href="#Projects"><FaAngleDoubleDown/></Navitem>
      </ScrollDiv>
      </section>

     <section id="Projects"> 
     <Projects/>
     <ScrollDiv>
           <Navitem href="#Contact"><FaAngleDoubleDown/></Navitem>
      </ScrollDiv>
     </section>
      <section id="Contact">
        <Contact/>
        
      </section>

    </div>
    </ThemeProvider>
  );
}

export default App;
