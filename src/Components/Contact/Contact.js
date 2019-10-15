import React from 'react'
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaAngleDoubleUp,FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go"
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
color:#FFFA82;
text-shadow: 2px 2px 2px black;
font-family: 'Caveat';
:hover{
    font-style: italic;

}
`
const H2 = styled.h1`
color:#DA5F7C;
text-shadow: 2px 2px 2px black;
font-family: 'Caveat';
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
export default function Contact() {

    let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
    return (
        <div>
            <ContactDiv>
                <H2>Contact Me!</H2>
<H1>Phone Number: 515-346-8817</H1>
<H1>Email: bsoghigian@gmail.com</H1>

            </ContactDiv>
            <ScrollDiv>
     {/* FaAngleDoubleDown */}
     <IconButton
          href="https://www.linkedin.com/in/bryce-soghigian-0556a9184/"
          variant="solid"
          variantColor="pink"
          aria-label="Call Sage"
          fontSize="20px"
          icon={FaLinkedin}
/>
     <IconButton
          
          variant="solid"
          variantColor="pink"
          aria-label="Call Sage"
          fontSize="20px"
          icon={FaAngleDoubleUp}
/>
<IconButton
          href="https://github.com/Bryce-Soghigian"
          variant="solid"
          variantColor="pink"
          aria-label="Call Sage"
          fontSize="20px"
          icon={GoMarkGithub}
/>
     </ScrollDiv>
        </div>
    )
}
