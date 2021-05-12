import "./style.css";

document.getElementById("btn").onclick = disableScreen;

function disableScreen() {
    // creates <div class="overlay"></div> and 
    // adds it to the DOM
    var div= document.createElement("div");
    div.className += "overlay";
    document.getElementsByClassName('col').appendChild(div);
}