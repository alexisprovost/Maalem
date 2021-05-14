import React, { useState, useEffect } from "react";
//import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import UserProfile from '../../../UserProfile';

import './Chat.css';

let r = Math.random().toString(36).substring(7);
const name = r;

const ENDPOINT = 'http://localhost:9000/';

let socket;

var username = "User";
var roomTempName = "Salon Principal";

function changeRoom(roomName){
  roomTempName = "card 1";
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
    alert('room is now '+room);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name)

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
      socket.emit('sendMessage', message, () => setMessage(''));
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
