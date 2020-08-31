import React, { Component } from 'react'
export default class portfolio extends Component {
        



render() {
      
    return(
<div id ="portfolio"> 
      
            <div className="portfolio-images">
              <a href="https://sjazfrey.github.io/first_project">
                <div className="box">
                  <img src="./images/1stimg.png" alt="memory pattern" />
                  <span className ="click"> Click Me</span>
                </div>
              </a>
          
          
              <a href="https://tinetti.herokuapp.com/"> 
                <div className="box">
                  <img src="./images/2ndimg.png" alt="tight rope walker" />
                  <span className ="click"> Click Me</span>        
                </div>
              </a>
          
          
              <a href="https://mighty-meadow-95753.herokuapp.com/">
                <div className="box">
                  <img src="./images/3rdimg.png" alt="book" />                  <span className ="click"> Click Me</span>
                </div>
              </a>
          
              <a href="http://smartini.herokuapp.com/smartini/">
                <div className="box">
                  <img src="./images/4thimg.png" alt="question marks" />                  <span className ="click"> Click Me</span>
                </div>
              </a>
              <a href="http://smartini.herokuapp.com/">
                <div className="box">
                  <img src="./images/5thimg.jpeg" alt="cat" />
                  <span className ="click"> Click Me</span>
                </div>
              </a>
          </div>
        
            <h2>Portfolio</h2>
        
            <p>
              <strong> Memory Game​- First Project: </strong>Using GitHub, DOM, AJAX, CSS, jQuery. This app was developed using
              jquery animate along with the above mentioned technologies. It's a tile base game with an 8x8 grid where the user
              turns over 2 tiles at a time to attempt to find a match. If the 2 tiles do not match then the tiles will flip back
              over and the user can take another turn. <a
                href="https://sjazfrey.github.io/first_project">https://sjazfrey.github.io/first_project</a></p>
        
              <br /><strong>Tinetti Balance Website​- Second Project:</strong> CRUD app using GitHub, DOM manipulation, AJAX, CSS,
              jQuery, Express, EJS, 7 RESTful routes, MongoDB / Mongoose, and Heroku. This app was developed for Physical
              Therapists to use to be able to perform the balance test with their clients. This project used radio buttons to
              click on to score each test section then automatically scored the test for the therapist, and it would keep the
              score, the date, and the name which assisted the therapist in keeping track of this information. <a href="https://tinetti.herokuapp.com/">https://tinetti.herokuapp.com/</a>I updated the app to make it more usable. <a href="https://tinetti-app.herokuapp.com/">https://tinetti-app.herokuapp.com/</a><br />
        
              <br /><strong>Bookworm-​ Third project was a group project.</strong> I did the frontend using MERN: MongoDB,
              Express, React, and NodeJS along with CRUD. This app was developed using Google API to search for books, favorite
              books, and add books to your collection of books. <a
                href="https://mighty-meadow-95753.herokuapp.com/">https://mighty-meadow-95753.herokuapp.com/</a><br />
            
        
           <p> <strong>Smartini Trivia: Fourth project:</strong> This app contained Express, Auth, Full Crud. A fun Trivia
            app to use online with a group of people or by yourself. Create your own game or have random questions selected for
            a challenging game. <a
            href="http://smartini.herokuapp.com/smartini/">http://smartini.herokuapp.com/smartini/</a>
            <a href="http://smartini.herokuapp.com/index.html">http://smartini.herokuapp.com/index.html</a>
            </p>
          </div> 
          
      
        
    
            
  
    )
}
}
