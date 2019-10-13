import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills'
import { ThemeProvider } from "@chakra-ui/core";
import { expression } from '@babel/template';
import Experience from './Components/experience/Experience';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Navbar/>
      <Intro/>
      <Experience/>
<Route exact path = "/Experience"/>
<Route exact path ="/Projects" component={Projects}/>
<Route exact path = "/Skills" component={Skills}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
