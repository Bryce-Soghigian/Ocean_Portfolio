import React,{useRef,useEffect} from 'react';
import {FaAngleDoubleDown, FaAngleDoubleUp} from "react-icons/fa";
import './App.css';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';
import * as THREE from "three";
import { ThemeProvider } from "@chakra-ui/core";
import Experience from './Components/experience/Experience';
import Contact from './Components/Contact/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components';

const NavContainer = styled.div`
background-image:linear-gradient(135deg, rgb(245, 177, 77),rgb(237, 53, 115));
width:100%;
height:8vh;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:row;
`
const Navitem = styled(AnchorLink)`
text-decoration:none;
margin-right:1%;
font-size:1rem;
text-transform:uppercase;
font-family: 'Changa One';
color:#F2F8FD;
text-shadow: 2px 2px 2px black;
:hover{
    text-decoration:underline;
    /* transform: rotate(3deg); */
    transform: scale(1.3);
    font-style: italic;
    
    transition:.5s;
}
@media(min-width:1200px){
    font-size: 1.7rem;
}
@media(min-width:1700px){
    font-size: 2.7rem;
}
`
const H1 = styled.h1`
color:white;

`
const ScrollDiv = styled.div`
display:flex;
justify-content:center;
border:black;
border-width: 3px;
z-index:4;
align-items:center;
height:7vh;
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
  const refContainer = useRef();
  useEffect(() => {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF0965A);
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.gammaFactor = 2.2;
renderer.gammaOutput = false;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // const colorMap = new TextureLoader().load( './Pepe.jpeg' );
    var new_geometry = new THREE.BoxGeometry(3,3,3)
    var new_Material = new THREE.MeshBasicMaterial({color: 0xE15067})
    // var sun_geometry = new THREE.ConeBufferGeometry(20,10 ,20)
    // var sun_geometry = new THREE.IcosahedronBufferGeometry(2,1 ,2)
    // var blue_Material = new THREE.MeshBasicMaterial({color:0xEE466F})
    // var sun_Material = new THREE.MeshBasicMaterial({color:0xF2C35F})
    // var sun = new THREE.Mesh(sun_geometry,sun_Material)
    var ring = new THREE.Mesh(new_geometry,new_Material)
    // scene.add(sun)
    scene.add(ring)
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      // sun.rotation.x += 100.09;
      // sun.rotation.y += 100000.09;
      // sun.rotation.z += 100;
      ring.rotation.x += .010;
      ring.rotation.y += .010;
      ring.rotation.z += .0010;
      renderer.render( scene, camera );
    };
    animate();
  }, [refContainer])
 
  return (
    <ThemeProvider>
      
    <div className="App">

    <section id="Intro">
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
            {/* <A href ="r.pdf" download>Resume</A>
        */}
        </NavContainer>
      
      <Intro/>
      </section>
      <ScrollDiv>
     
<Navitem href="#Experience"><FaAngleDoubleDown/></Navitem>
     </ScrollDiv>
      <section id="Experience">
      <Experience/>
      <ScrollDiv>
            
           
           <Navitem href="#Intro"><FaAngleDoubleUp/></Navitem>
           <Navitem href="#Projects"><FaAngleDoubleDown/></Navitem>
      </ScrollDiv>
      </section>

     <section id="Projects"> 
     <Projects/>
     <ScrollDiv>
           
           <Navitem href="#Experience"><FaAngleDoubleUp/></Navitem>
           <Navitem href="#Contact"><FaAngleDoubleDown/></Navitem>
      </ScrollDiv>
     </section>
      <section id="Contact">
        <Contact/>
        
      </section>
      <div ref={refContainer}>

      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
