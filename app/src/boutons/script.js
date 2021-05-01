import React from "react";
import styled from "styled-components";
import "./style.css";
import { ListGroup, Button as B} from 'react-bootstrap';

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
    display: inline-block;
    margin:auto;
    margin-left: 1rem;
    margin-right: 1rem; 
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    min-width: 10rem;
    &:hover {
      background-color: ${(props) => theme[props.theme].hover};
    }
    `;

function clickIgnore() {
    alert("Ignorer");
}
function clickRepondre() {
    alert("Repondre");
}

export default function Boutons() {
    return (
        <>
            <div className="buttonHolder" style={{marginTop: '550px'}}>
                <div className="buttonGroup">
                    <B variant="success" style={{width: '150px', marginRight: '10px'}}>Répondre</B>{' '}
                    <B variant="danger" style={{width: '150px', marginLeft: '10px'}}>Ignorer</B>
                </div>
            </div>
        </>
    );
}
