import React from 'react';
import "./style.css";

export default function Chat() {
    return (
        <>
        <div className="contactHolder">
            <span className="receiverName">
                Receiver Name
            </span>
            <div className="userPic">
                <span style={{'backgroundImage': 'url(https://picsum.photos/50/50)',
                width: '50px',
                height: '50px',
                display: 'block',
                'backgroundSize': '100% auto',
                'borderRadius': '50%'}}></span>
            </div>
        </div>
        <div className="messagesHolder">
            <div className="messageFrom">
                test
            </div>
            <div className="messageTo">
                test
            </div>
        </div>
        <div className="chatInput">
            test input
        </div>
        </>
    );   
}
