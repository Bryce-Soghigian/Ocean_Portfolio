import React from 'react'
import styled from 'styled-components';
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa';

const IconDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
width:7%;
@media(max-width:500px){
    width:15%;
}
@media(max-width:1700px){
    width:20%;
}

/* @media{} */

`

const IntroDiv = styled.div`
    background-image:linear-gradient(45deg, rgba(229, 128, 66, 0.45) 0%, rgba(229, 128, 66, 0.45) 25%,rgba(212, 160, 112, 0.45) 25%, rgba(212, 160, 112, 0.45) 50%,rgba(195, 191, 157, 0.45) 50%, rgba(195, 191, 157, 0.45) 75%,rgba(178, 223, 203, 0.45) 75%, rgba(178, 223, 203, 0.45) 100%),linear-gradient(135deg, rgb(251, 248, 117) 0%, rgb(251, 248, 117) 25%,rgb(246, 167, 110) 25%, rgb(246, 167, 110) 50%,rgb(240, 85, 102) 50%, rgb(240, 85, 102) 75%,rgb(235, 4, 95) 75%, rgb(235, 4, 95) 100%);
    display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
align-content:center;
width:100%;
height:87vh;
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

const H1 = styled.h1`
font-size: 5rem;
color:white;
text-shadow: 2px 2px 2px black;
font-family:'caveat';
margin:0px;
:hover{
    font-style: italic; 
    transition:.5s;
}
::selection{
    background:black;
}
::-moz-selection {
 background:black;

}
/* @media(min-width:500px){
font-size: 4.3rem;
}
@media(min-width:800px){
font-size: 6.7rem;
} */
@media(min-width:1700px){
    font-size: 15rem;
}
`
const H3 = styled.h1`
color:white;
text-shadow: 2px 2px 2px black;
margin:0px;
font-family:'Changa One';
/* @media(min-width:500px){
font-size: 2rem;
}
@media(min-width:800px){
font-size: 3.5rem;
} */
/* @media(max-width:1200px){
    font-size: 7rem;
}
@media(max-width:1400px){
    font-size: 8.5rem;
} */
@media(min-width:1700px){
    font-size: 5rem;
}
:hover{
    font-style: italic;
    /* transform: scale(1.75);
    transition:.5s; */
}
::selection{
    background:black;
}
::-moz-selection {
 background:black;

}
@media(max-width:500px){
   
}
`
const Linked = styled.a`
font-size:2rem;
color:white;

:visited{
    color:white;
}
:hover{
    transform: scale(1.25);
    transition:1s;
    color:#0077B5;
}
@media(min-width:1700px){
    font-size: 5rem;
}
`
const Github = styled.a`
color:white;
font-size:2rem;

:visited{
    
    color:white;
}
:hover{
    transform: scale(1.25);
    transition:.7s;
    color:black;
}
@media(min-width:1700px){
    font-size: 5rem;
}
`

export default function Intro() {
    return (
    <div>
        
     <IntroDiv>
         <H1>Bryce Soghigian</H1>
         <H3>Full Stack Engineer</H3>
        <IconDiv>
            <Linked href="https://www.linkedin.com/in/bryce-soghigian-0556a9184/" target="_blank"><FaLinkedin/></Linked>
            <Github href="https://github.com/Bryce-Soghigian" target="_blank"><FaGithubSquare/></Github>
        </IconDiv>
     </IntroDiv>
     

     </div>
    )
}
