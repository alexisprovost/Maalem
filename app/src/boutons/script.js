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

const yesButton = styled.button`
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
    
const noButton = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: black;
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

const ButtonToggle = styled(yesButton)`
        opacity: 0.7;
        ${({ active }) =>
        active &&
        `
          opacity: 1; 
        `}
      `;





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
                <Button theme="blue" onClick={clickMe}>
                    Repondre
                    </Button>
            </div>
            <div>
                <Button theme="pink" onClick={clickMe}>
                    Pink theme
              </Button>
            </div>
            <div>
                <noButton onClick={clickMe}>
                    Ignorer
                    </noButton>
            </div>
            
        </>
    );
}
