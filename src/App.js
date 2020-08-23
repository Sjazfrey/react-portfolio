import React, { Component } from 'react';
import './App.css'

import Navbar from './components/navbar';
import Home from './components/home';
import Who from './components/who';
import Portfolio from './components/portfolio';
import Resume from './components/resume';


export default class App extends Component {  

  render(){

    return(
      <div>
        <Navbar/>
        <Home/>
        <Who/>
        <Portfolio/>
        <Resume/>
      </div>
    )
  }
}

   
   

   
     

 

    
    
