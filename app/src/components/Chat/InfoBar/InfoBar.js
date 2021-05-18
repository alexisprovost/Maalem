import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import './InfoBar.css';
//Le top de notre chat, dans lequel on met le nom de la salle de clavardage
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href='#' onClick={resolveChat}><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

const resolveChat = () =>{
  //window.open('','_self').close();
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let room = urlParams.get('room');

  let _data = {
    id: room
  }

  fetch('http://localhost:9000/1/card', {
    method: "DELETE",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
}

export default InfoBar;