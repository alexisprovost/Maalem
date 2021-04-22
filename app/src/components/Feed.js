import React from 'react';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

export default function Feed() {
    return (
        <div>
          <Container triggerText={'Poser une Question'} onSubmit={onSubmit}/>
          <div>
            <Card key={1} no={1}/>
          </div>
          <Boutons />
        </div>
    )  
}





