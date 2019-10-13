import React from 'react'
import styled from 'styled-components';
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
const H1 = styled.h1`
color:#FFFA82;
text-shadow: 2px 2px 2px black;
:hover{
    font-style: italic;
    transform: scale(1.2);
    transition:.5s;
}
`
const H3 = styled.h3`
color:#FFFA82;
text-shadow: 2px 2px 2px black;
:hover{
    font-style: italic;
    transform: scale(1.2);
    transition:.5s;
}
@media(max-width:500px){
   
}
`
export default function Intro() {
    return (
     <IntroDiv>
         <H1>Bryce Soghigian</H1>
         <H3>Full Stack Engineer</H3>

     </IntroDiv>
    )
}
