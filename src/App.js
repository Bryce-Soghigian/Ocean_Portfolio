import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills'


function App() {
  return (
    <div className="App">
      <Navbar/>

<Route exact path ="/" component={Intro}/>
<Route exact path = "/Experience"/>
<Route exact path ="/Projects" component={Projects}/>
<Route exact path = "/Skills" component={Skills}/>
    </div>
  );
}

export default App;
