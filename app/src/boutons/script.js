import React, { useState } from "react";
import styled from "styled-components";

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    },
    green: {
        default: "#32cd32",
        hover: "#228b22"
    },
    red: {
        default: "#ff0000",
        hover: "#8b0000"
    }
};
const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: ${(props) => theme[props.theme].hover};
    }
    `;


function clickMe() {
    alert("You clicked me!");
}
function clickIgnore() {
    alert("Ignorer");
}
function clickRepondre() {
    alert("Repondre");
}

/*const ButtonToggle = styled(yesButton)`
        opacity: 0.7;
        ${({ active }) =>
        active &&
        `
          opacity: 1; 
        `}
      `;*/





const types = ["Cash", "Credit Card"];


/*function ToggleGroup() {
    const [active, setActive] = useState(types[0]);
    return (
        <div>
            {types.map((type) => (
                <ButtonToggle active={active === type} onClick={() => setActive(type)}>
                    {type}
                </ButtonToggle>
            ))}
        </div>
    );
}*/

export default function Boutons() {
    return (
        <>
            <div>
                <Button class = "repondre" theme="green" onClick={clickRepondre}>
                    Repondre
                    </Button>
            </div>
            <div>
                <Button class = "pink" theme="pink" onClick={clickMe}>
                    Pink theme
              </Button>
            </div>
            <div>
                <Button class = "ignore" theme= "red" onClick={clickIgnore}>
                    Ignorer
                    </Button>
            </div>
            
        </>
    );
}
