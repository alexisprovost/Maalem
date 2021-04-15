import react from 'react';
import ReactDOM, { render } from 'react-dom';
import "./style.css";
import "./userPic.jpg";

export default function Chat() {
    return (
        <>
        <span className="receiverName">
            Receiver Name
        </span>
        <div className="userPic">
            <span style={{"background-image": 'url("https://picsum.photos/50/50")'}}></span>
  
        </div>
        </>
    );   
}
