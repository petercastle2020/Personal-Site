import React from "react";
import '../home-page/Home-page.css';
import mobile_user from '../home-page/mobile_user.svg';
import creative_thinking from '../home-page/creative_thinking.svg';


function Home() {
    return (
    <div className="body-body">
        <img className="mobile-user-img" src={mobile_user} width="30%" height="30%" alt="mobile-user-img"/>
        <h1>I'm Peter Castle</h1>
        <h2>a <span>web</span> developer.</h2>  
        <img className="creative-thinking-img"src={creative_thinking} width="30%" height="30%" alt="creative-thinking-img"/>
        {/*<img src={mobile_user} width="50%" height="50%" alt="mobile-user-img"/>*/}
    </div>
    )
}

export default Home;