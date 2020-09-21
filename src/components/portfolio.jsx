import React, { Component } from 'react'
export default class portfolio extends Component {
        



render() {
      
    return(

        
        <div id="portfolio"> <h2>Portfolio</h2>


        
        

                <div className="first">
                 <img  className="picture" src="./images/1stimg.png" alt="memory pattern" /> <p className="info"><strong>Memory Game-First Project </strong>Using GitHub, DOM, AJAX, CSS, jQuery. This app was developed using jquery animate along with the above mentioned technologies. It's a tile base game with an 8x8 grid where the user
              turns over 2 tiles at a time to attempt to find a match. If the 2 tiles do not match then the tiles will flip back
              over and the user can take another turn <a
                href="https://sjazfrey.github.io/first_project">https://sjazfrey.github.io/first_project</a></p>
                  

                </div>
        
             <div className="first"> 
             <img className="picture" src="./images/2ndimg.png" alt="tight rope walker" /> <p className="info"><strong>Tinetti Balance Website​- Second Project:</strong> CRUD app using GitHub, DOM manipulation, AJAX, CSS,
              jQuery, Express, EJS, 7 RESTful routes, MongoDB / Mongoose, and Heroku. This app was developed for Physical
              Therapists to use to be able to perform the balance test with their clients. This project used radio buttons to
              click on to score each test section then automatically scored the test for the therapist, and it would keep the
              score, the date, and the name which assisted the therapist in keeping track of this information. <a href="https://tinetti.herokuapp.com/">https://tinetti.herokuapp.com/</a>I updated the app to make it more usable. <a href="https://tinetti-app.herokuapp.com/">https://tinetti-app.herokuapp.com/</a></p> 
              </div>
        
             <div className="first">
             <img className="picture" src="./images/3rdimg.png" alt="book" /> <br />
             <p className="info"><strong>Bookworm-​ Third project was a group project.</strong> I did the frontend using MERN: MongoDB,
              Express, React, and NodeJS along with CRUD. This app was developed using Google API to search for books, favorite
              books, and add books to your collection of books. <a
                href="https://mighty-meadow-95753.herokuapp.com/">https://mighty-meadow-95753.herokuapp.com/</a></p>
                </div>
            
        
           <div className="first">
             <img className="picture" src="./images/4thimg.png" alt="question marks" /> <p  className="info"> <strong>Smartini Trivia: Fourth project:</strong> This app contained Express, Auth, Full Crud. A fun Trivia
            app to use online with a group of people or by yourself. Create your own game or have random questions selected for
            a challenging game. 
            Game:<a  href="http://smartini.herokuapp.com/smartini/">http://smartini.herokuapp.com/smartini/</a><br />
            Socket.io part: <a href="http://smartini.herokuapp.com/index.html">http://smartini.herokuapp.com/index.html</a></p>
            </div>
          
         
         </div> 
   
        
    
            
  
    )
}
}

