import React from 'react'
import styled from 'styled-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core";
import {FaAngleDoubleDown} from "react-icons/fa";
import {IconButton} from '@chakra-ui/core'
import Laptop from './Laptop.png'
import Crime from './Crime.png';
import Tips from './Tips.png'

const ProjectDiv = styled.div`
background-image:linear-gradient(55deg, rgba(208, 208, 208, 0.03) 0%, rgba(208, 208, 208, 0.03) 20%,rgba(55, 55, 55, 0.03) 20%, rgba(55, 55, 55, 0.03) 40%,rgba(81, 81, 81, 0.03) 40%, rgba(81, 81, 81, 0.03) 60%,rgba(208, 208, 208, 0.03) 60%, rgba(208, 208, 208, 0.03) 80%,rgba(191, 191, 191, 0.03) 80%, rgba(191, 191, 191, 0.03) 100%),linear-gradient(291deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 14.286%,rgba(105, 105, 105, 0.02) 14.286%, rgba(105, 105, 105, 0.02) 28.572%,rgba(230, 230, 230, 0.02) 28.572%, rgba(230, 230, 230, 0.02) 42.858%,rgba(216, 216, 216, 0.02) 42.858%, rgba(216, 216, 216, 0.02) 57.144%,rgba(181, 181, 181, 0.02) 57.144%, rgba(181, 181, 181, 0.02) 71.42999999999999%,rgba(129, 129, 129, 0.02) 71.43%, rgba(129, 129, 129, 0.02) 85.71600000000001%,rgba(75, 75, 75, 0.02) 85.716%, rgba(75, 75, 75, 0.02) 100.002%),linear-gradient(32deg, rgba(212, 212, 212, 0.03) 0%, rgba(212, 212, 212, 0.03) 12.5%,rgba(223, 223, 223, 0.03) 12.5%, rgba(223, 223, 223, 0.03) 25%,rgba(11, 11, 11, 0.03) 25%, rgba(11, 11, 11, 0.03) 37.5%,rgba(86, 86, 86, 0.03) 37.5%, rgba(86, 86, 86, 0.03) 50%,rgba(106, 106, 106, 0.03) 50%, rgba(106, 106, 106, 0.03) 62.5%,rgba(220, 220, 220, 0.03) 62.5%, rgba(220, 220, 220, 0.03) 75%,rgba(91, 91, 91, 0.03) 75%, rgba(91, 91, 91, 0.03) 87.5%,rgba(216, 216, 216, 0.03) 87.5%, rgba(216, 216, 216, 0.03) 100%),linear-gradient(312deg, rgba(113, 113, 113, 0.01) 0%, rgba(113, 113, 113, 0.01) 14.286%,rgba(54, 54, 54, 0.01) 14.286%, rgba(54, 54, 54, 0.01) 28.572%,rgba(166, 166, 166, 0.01) 28.572%, rgba(166, 166, 166, 0.01) 42.858%,rgba(226, 226, 226, 0.01) 42.858%, rgba(226, 226, 226, 0.01) 57.144%,rgba(109, 109, 109, 0.01) 57.144%, rgba(109, 109, 109, 0.01) 71.42999999999999%,rgba(239, 239, 239, 0.01) 71.43%, rgba(239, 239, 239, 0.01) 85.71600000000001%,rgba(54, 54, 54, 0.01) 85.716%, rgba(54, 54, 54, 0.01) 100.002%),linear-gradient(22deg, rgba(77, 77, 77, 0.03) 0%, rgba(77, 77, 77, 0.03) 20%,rgba(235, 235, 235, 0.03) 20%, rgba(235, 235, 235, 0.03) 40%,rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%,rgba(181, 181, 181, 0.03) 60%, rgba(181, 181, 181, 0.03) 80%,rgba(193, 193, 193, 0.03) 80%, rgba(193, 193, 193, 0.03) 100%),linear-gradient(80deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 14.286%,rgba(114, 114, 114, 0.02) 14.286%, rgba(114, 114, 114, 0.02) 28.572%,rgba(240, 240, 240, 0.02) 28.572%, rgba(240, 240, 240, 0.02) 42.858%,rgba(221, 221, 221, 0.02) 42.858%, rgba(221, 221, 221, 0.02) 57.144%,rgba(74, 74, 74, 0.02) 57.144%, rgba(74, 74, 74, 0.02) 71.42999999999999%,rgba(201, 201, 201, 0.02) 71.43%, rgba(201, 201, 201, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(257deg, rgba(72, 72, 72, 0.03) 0%, rgba(72, 72, 72, 0.03) 16.667%,rgba(138, 138, 138, 0.03) 16.667%, rgba(138, 138, 138, 0.03) 33.334%,rgba(54, 54, 54, 0.03) 33.334%, rgba(54, 54, 54, 0.03) 50.001000000000005%,rgba(161, 161, 161, 0.03) 50.001%, rgba(161, 161, 161, 0.03) 66.668%,rgba(17, 17, 17, 0.03) 66.668%, rgba(17, 17, 17, 0.03) 83.33500000000001%,rgba(230, 230, 230, 0.03) 83.335%, rgba(230, 230, 230, 0.03) 100.002%),linear-gradient(47deg, rgba(191, 191, 191, 0.01) 0%, rgba(191, 191, 191, 0.01) 16.667%,rgba(27, 27, 27, 0.01) 16.667%, rgba(27, 27, 27, 0.01) 33.334%,rgba(66, 66, 66, 0.01) 33.334%, rgba(66, 66, 66, 0.01) 50.001000000000005%,rgba(36, 36, 36, 0.01) 50.001%, rgba(36, 36, 36, 0.01) 66.668%,rgba(230, 230, 230, 0.01) 66.668%, rgba(230, 230, 230, 0.01) 83.33500000000001%,rgba(93, 93, 93, 0.01) 83.335%, rgba(93, 93, 93, 0.01) 100.002%),linear-gradient(90deg, #FFF,#FFF);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:700px;

`

const Card = styled.div`
width:50%;
border-style:solid;
border-color:#E94354;
/* background-image:linear-gradient(45deg, rgba(229, 128, 66, 0.45) 0%, rgba(229, 128, 66, 0.45) 25%,rgba(212, 160, 112, 0.45) 25%, rgba(212, 160, 112, 0.45) 50%,rgba(195, 191, 157, 0.45) 50%, rgba(195, 191, 157, 0.45) 75%,rgba(178, 223, 203, 0.45) 75%, rgba(178, 223, 203, 0.45) 100%),linear-gradient(135deg, rgb(251, 248, 117) 0%, rgb(251, 248, 117) 25%,rgb(246, 167, 110) 25%, rgb(246, 167, 110) 50%,rgb(240, 85, 102) 50%, rgb(240, 85, 102) 75%,rgb(235, 4, 95) 75%, rgb(235, 4, 95) 100%);
   */
  background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const H1 = styled.h1`
color:white;
text-shadow: 2px 2px 2px black;
font-family: 'Caveat';
::selection {
    background:black;
    
}
::-moz-selection {
 background:black;

}
`
const H2= styled.h2`
color:white;
font-style: bold;
/* text-shadow: 2px 2px 2px black; */
font-family: 'Caveat';
::selection {
    background:black;
    
}
::-moz-selection {
 background:black;

}
`
const Description = styled.p`
color:white;
/* color:#EAD174; */
text-shadow: 1px 1px 1px black;
font-family: 'Changa One';
::selection {
    background:black;
    
}
::-moz-selection {
 background:black;

}

`
const IMG = styled.img`
width:100%;
`
const Buttons = styled.div`
width:75%;
display:flex;
flex-direction:row;
justify-content:space-evenly;
`
const A = styled.a`
text-decoration:none;
color:black;
:visited{
    color:black;
}
`
const Button = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-right:2px;
padding-left:2px;
font-size:.8rem;
text-transform:uppercase;
text-decoration:none;
text-align:center;
vertical-align:center;
height:25px;
border-radius:5%;
border-style:solid;
border-color:black;
background:#EAD174;
color:white;
/* color:#DA5F7C; */

font-family:'Changa One';
:hover{
    
    transform: rotate(-10deg);
    font-style: italic;
}


`
const Center = styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const Red = styled.p`
color:black;
text-shadow:2px 2px 2px #DA5F7C;::selection{
    background:white;
}
::-moz-selection {
 background:white;

}
`
export default function Projects() {
    return (
        <div>
            <ProjectDiv>
                <H1>Projects</H1>
                <Tabs variant="soft-rounded" isFitted align="center" variantColor="pink" >
  <TabList>
    <Tab>Crime-Stats</Tab>
    <Tab>UseTechStuff</Tab>
    <Tab>TipsEase</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
<Center>
    <Card>
                <H2>Crime Statistics For Travelers</H2>
                <IMG src = {Crime}/>
                <Description>Planned, Released, and Launched A Crime Statistics Application I built with a team of developers. 
                It Has Geolocation,Data Visualization,Google Authentication, data manipulation and filtering,
                and much more. Check out the links below for more info


                </Description>
                <Buttons>
                    <Button><A href="https://www.notion.so/Crime-Statistics-for-Travelers-a7e69847024d4cdc85aaf85cb413df71" target="_blank">PVD</A></Button>
                    <Button ><A href="https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-fe" target="_blank">CODE</A></Button>
                    <Button><A href="https://crime-statistics-master.netlify.com/" target="_blank">Demo</A></Button>
                </Buttons>
                </Card>
                </Center>
    </TabPanel>
    <TabPanel>
    <Center>
    <Card>
                <H2>Use My Techstuff API</H2>
                <IMG src = {Laptop}/>
                <Description>Built out an API with NODEJS, Express, KnexJS, and Postgres. The Api was for a frontend development team,
                Some of the endpoints include basic crud endpoints,Payment integration with stripe, Authentication,and Image Uploading.
                </Description>
                <Buttons>
                    
                    <Button><A href="https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE" target="_blank">Code</A></Button>
                    <Button><A href="https://github.com/BW-UseMyTechStuff/UseMyTechStuff-BE/blob/master/README.md" target="_blank">Documentation</A></Button>
                </Buttons>
                </Card>
                </Center>
    </TabPanel>
    <TabPanel>
    <Center>
    <Card>
                <H2>TipsEase</H2>
                <IMG src = {Tips}/>
                <Description>Built out a mock Tipping Application.I used React and Context Api. Has Crud Operations, Sorting Functionality
                    ,and Authentication. To Login Use the Following Password
                    <Red>    Username:Bryce     </Red>
                    <Red>    Password:pw        </Red>
                    
                     </Description>
                <Buttons>
                    
                    <Button><A href="https://github.com/bw-tipsease/TipsEaseFE" target="_blank">Code</A></Button>
                    <Button><A href="https://tipsease-fe-test.netlify.com" target="_blank">Demo</A></Button>
                </Buttons>
                </Card>
                </Center>
    </TabPanel>
  </TabPanels>
</Tabs>


            </ProjectDiv>

        </div>
    )
}
