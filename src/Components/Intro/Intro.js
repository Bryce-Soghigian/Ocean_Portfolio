import React from 'react'
import styled from 'styled-components';
import {FaAngleDoubleDown} from "react-icons/fa";
import {IconButton} from '@chakra-ui/core'
import Flame from './Flame.mp4';
// import Spiral from './Spiral.mp4'
const IntroDiv = styled.div`
    background-image:linear-gradient(45deg, rgba(229, 128, 66, 0.45) 0%, rgba(229, 128, 66, 0.45) 25%,rgba(212, 160, 112, 0.45) 25%, rgba(212, 160, 112, 0.45) 50%,rgba(195, 191, 157, 0.45) 50%, rgba(195, 191, 157, 0.45) 75%,rgba(178, 223, 203, 0.45) 75%, rgba(178, 223, 203, 0.45) 100%),linear-gradient(135deg, rgb(251, 248, 117) 0%, rgb(251, 248, 117) 25%,rgb(246, 167, 110) 25%, rgb(246, 167, 110) 50%,rgb(240, 85, 102) 50%, rgb(240, 85, 102) 75%,rgb(235, 4, 95) 75%, rgb(235, 4, 95) 100%);
    display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:600px;
`
// const Button = styled.button`
// width: 100px;
// height:100px;
// border-style:solid;
// border-color:black;

// border-radius:100%;
// text-size-adjust:20px;
// color:white;
// background-image:linear-gradient(90deg, rgb(252, 108, 53),rgb(170, 18, 159));
// `
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
const H1 = styled.h1`
font-size: 2.5rem;
color:#FFFA82;
text-shadow: 2px 2px 2px black;
font-family: 'Caveat';
:hover{
    font-style: italic;
    transform: scale(1.75);
    transition:.5s;
}
`
const H3 = styled.h3`
color:#FFFA82;
text-shadow: 2px 2px 2px black;
font-family: 'Caveat';
:hover{
    font-style: italic;
    transform: scale(1.75);
    transition:.5s;
}
@media(max-width:500px){
   
}
`
export default function Intro() {
    return (
    <div>
     <IntroDiv>
         <H1>Bryce Soghigian</H1>
         <H3>Full Stack Engineer</H3>

     </IntroDiv>

     </div>
    )
}
