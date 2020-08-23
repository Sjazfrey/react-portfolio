import React, { Component} from 'react';
export default class navbar extends Component{

    render() {
        console.log('hello')
       
        return(
        <div className='navbar'> 

            <div className="sticky">
             <div className="name"><span  className="me">Shirley Kaffrey</span>
                <a href="#home">Home</a>                                
                <a href="#who">Who I Am</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#resume">Resume</a> 
             </div>
            </div>
        </div>
        )
    }
}



        