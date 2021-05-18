import React, { useState, useEffect } from "react";
//import queryString from 'query-string';
import io from "socket.io-client";

import Messages from './Messages/Messages';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import UserProfile from '../../UserProfile';

import './Chat.css';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const ENDPOINT = 'http://localhost:9000/';

let socket;

let username = urlParams.get('user');
let roomTempName = urlParams.get('room');

function changeRoom(roomName){
  roomTempName = roomName;
}

function changeName(username){
  roomTempName = username;
}

var tempName = 'null';

if (tempName === 'null'){
  tempName = Math.random().toString(36).substring(7);
}


const Chat = ({ location }) => {
  let [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    
    const name = username;
    let room = roomTempName;
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
    //joindre la salle
      socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location, roomTempName]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  function changeRoom(roomName){
    setRoom(roomName);
  }

  function changeName(username){
    setName(username);
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', {message, name}, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="chat-container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export {Chat, changeRoom};
