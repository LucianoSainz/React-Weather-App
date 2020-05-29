import React, { Component } from 'react';
import Home from './components/Home';
import Weather from './components/Weather';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import {Switch, Route} from 'react-router-dom';



const App = () => {
    return (
      <>
        <Navbar />

        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/Weather" exact component={Weather} />
           <Route path="/AboutUs" exact component={AboutUs} />
        </Switch>  
      </>
      
    )
  }
  
  export default App;