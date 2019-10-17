import React from 'react'
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll} from 'react-scroll'
import { FaAngleDoubleUp,FaAngleDoubleDown} from 'react-icons/fa';
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa';
import {IconButton} from '@chakra-ui/core'
const ContactDiv = styled.div`
    background-image:linear-gradient(45deg, rgba(229, 128, 66, 0.45) 0%, rgba(229, 128, 66, 0.45) 25%,rgba(212, 160, 112, 0.45) 25%, rgba(212, 160, 112, 0.45) 50%,rgba(195, 191, 157, 0.45) 50%, rgba(195, 191, 157, 0.45) 75%,rgba(178, 223, 203, 0.45) 75%, rgba(178, 223, 203, 0.45) 100%),linear-gradient(135deg, rgb(251, 248, 117) 0%, rgb(251, 248, 117) 25%,rgb(246, 167, 110) 25%, rgb(246, 167, 110) 50%,rgb(240, 85, 102) 50%, rgb(240, 85, 102) 75%,rgb(235, 4, 95) 75%, rgb(235, 4, 95) 100%);
    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:600px;

`

const H1 = styled.h1`
font-size: 2.5rem;
display:flex;
align-items:center;
color:#FFFA82;
text-shadow: 2px 2px 2px black;

:hover{
    font-style: italic;

}
`
const H2 = styled.h1`
display:flex;
align-items:center;
color:white;
text-shadow: 2px 2px 2px black;
/* font-family: 'Caveat'; */
`
const ScrollDiv = styled.div`
display:flex;
justify-content:space-evenly;
border:black;
border-width: 3px;
z-index:4;
align-items:center;
  height: 60px;
  width: 100%;
  background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));

`
const Linked = styled.a`
color:white;
font-size:2rem;
:visited{
    color:white;
}
:hover{
    transform: scale(1.5);
    transition:1s;
    color:#0077B5;
}
`
const Github = styled.a`
color:white;
font-size:2rem;
:visited{
    
    color:white;
}
:hover{
    transform: scale(1.75);
    transition:.7s;
    color:black;
}
`
export default function Contact() {
   const scrollUp = () => {
        scroll.scrollToTop(); 
    };

    return (
        <div>
            <ContactDiv>
                {/* <H2>Contact Me Below!</H2>
                <H2><FaAngleDoubleDown/><FaAngleDoubleDown/></H2>
<H1>Phone Number: 515-346-8817</H1>
<H1>Email: bsoghigian@gmail.com</H1> */}

            </ContactDiv>
            <ScrollDiv>
     {/* FaAngleDoubleDown */}
     <Linked href="https://www.linkedin.com/in/bryce-soghigian-0556a9184/" target="_blank"><FaLinkedin/></Linked>
     <IconButton
          onClick={scrollUp}
          variant="solid"
          variantColor="pink"
          aria-label="Call Sage"
          fontSize="20px"
          icon={FaAngleDoubleUp}
/>
<Github href="https://github.com/Bryce-Soghigian" target="_blank"><FaGithubSquare/></Github>


     </ScrollDiv>
        </div>
    )
}
