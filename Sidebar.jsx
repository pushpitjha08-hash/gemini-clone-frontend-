import React,{useState} from "react" 
import  './Sidebar.css'
import {assets} from "../../assets/assets"


const Sidebar = () => {

    const [extended, setExtended] = useState(false) 

  return (
    <div className="sidebar">
        <div className="top">
            <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />
            {extended?<div className="new-chat">
                <img className="plus" src={assets.plus_icon} alt="" />
                <span>New Chat</span>
            </div> 
            :null} 

            {extended?<div className="recent">
                <p className="recent-title">Recent Chats</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react?</p>
            </div>
            </div>
            :null}





            {extended?<div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                <p>History</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                <p>Settings</p>
            </div>

            </div>
            :null} 
        </div>

    </div>
  );
}; 

export default Sidebar;
