import React, { Component, Fragment } from 'react';
import Home from './components/Home';
import Weather from './components/Weather';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';



const App = () => {
    return (
      <Fragment>
      <>
      
        <Navbar />

        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/Weather" exact component={Weather} />
           <Route path="/AboutUs" exact component={AboutUs} />
        </Switch>  
      </>
      <Footer />
     </Fragment>
     
    )
  }
  
  export default App;