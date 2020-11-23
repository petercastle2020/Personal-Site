import React from "react";
import '../home-page/Home-page.css';

import programming_white from '../home-page/programming_white.svg';




function Home() {
    return (
        
    <div>
        <div className="home-div">

            <div className="nav-content" >   
                <h3><a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a><a href="#" target="_blank" rel="noopener noreferrer">About</a><a href="#" target="_blank" rel="noopener noreferrer">Contact</a></h3>
            </div> 
                <div className="homepage-content">
                    <img className="programming_white-img" src={programming_white} width="50%" height="50%" alt="programming_white-img"/>
                    <h1>Hi, I'm Peter</h1>
                    <h2>Etiam scelerisque quam ligula, ac <br/>porttitor justo facilisis sollicitudin.</h2> 
                    <h2>Vestibulum ipsum sem, tristique quis malesuada<br/> suscipit, ullamcorper sit amet justo.</h2> 
                    <button>Check out my work</button>
                
                
                
                
                </div>
    
        </div>
    </div>
    )
}

export default Home;