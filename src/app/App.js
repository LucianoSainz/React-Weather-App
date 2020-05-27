import React, { Component } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';



const App = () => {
    return (
      <>
        <Navbar />
  
        <Switch>
           <Route path="/" exact component={Home} />
           
        </Switch>
      </>
    )
  }
  
  export default App;