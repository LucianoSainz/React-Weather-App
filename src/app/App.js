import React, { Component } from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';



const App = () => {
    return (
      <>
        <Navbar />
  
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/AboutUs" exact component={AboutUs} />
        </Switch>
      </>
    )
  }
  
  export default App;