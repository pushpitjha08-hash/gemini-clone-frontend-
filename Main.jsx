import React from "react"
import './Main.css'
import {assets} from '../../assets/assets' 


const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>GEMINI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <span>Hello dev</span>
                  <p> How can I help you today?</p>
            </div>
         <div className="cards">
             <div className="card">
                <p>Suggest beautiful places on upcoming trip!!</p>
                <img src={assets.compass_icon} alt="" />
             </div>

              <div className="card">
                <p>Summarise the urban planning concept in easy way</p>
                <img src={assets.bulb_icon} alt="" />
             </div>

              <div className="card">
                <p>Brainstorm session on coding basics!</p>
                <img src={assets.message_icon} alt="" />
             </div>

              <div className="card">
                <p>Plan a beatiful trip for work retreat!</p>
                <img src={assets.code_icon} alt="" />
             </div>

         </div>
         
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt" /> 
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} />
              <img src={assets.send_icon} /> 
            </div>
          </div>
        <p className="bottom-info" >
          Gemini may display incorrect information, you are advised to double-check for accuracy!
        </p>
        </div>
    </div>
  ); 
}; 

export default Main; 



