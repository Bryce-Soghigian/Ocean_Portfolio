import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills'
import { ThemeProvider } from "@chakra-ui/core";
import Experience from './Components/experience/Experience';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Navbar/>
      <Intro/>
      <Experience/>
      <Projects/>
      <Contact/>

    </div>
    </ThemeProvider>
  );
}

export default App;
