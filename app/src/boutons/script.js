import React from "react";
import "./style.css";
import { Button as B} from 'react-bootstrap';

export default function Boutons() {
    return (
        <>
            <div className="buttonHolder" style={{marginTop: '575px'}}>
                <div className="buttonGroup">
                    <B variant="success" style={{width: '150px', marginRight: '10px'}}>Répondre</B>{' '}
                    <B variant="danger" style={{width: '150px', marginLeft: '10px'}}>Ignorer</B>
                </div>
            </div>
        </>
    );
}
