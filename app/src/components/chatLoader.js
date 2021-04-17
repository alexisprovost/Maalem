export default function loadChat(){
    'use strict';
    var arrayVariable = ["one", "two", "three"];
    var arrayLength = arrayVariable.length;
    var temp;
    var temp2;
    
    for (let i = 0; i < arrayLength; i++) {
      temp = document.createElement('div');
      temp.className = 'messageFrom';
      temp.innerHTML = arrayVariable[i];
      document.getElementById("messagesHolder").appendChild(temp);
    }
}