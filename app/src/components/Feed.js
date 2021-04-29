import React from 'react';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

let myData = [ ];

let card1 = {
  "title": "card1",
  "subject": "math",
  "description": "this is the card's description",
  "author": "@Alec",
  "reward": 20,
  "img": 'url(https://picsum.photos/300/400)'
}

let card2 = {
  "title": "card2",
  "subject": "french",
  "description": "this is the card's description",
  "author": "@Alec",
  "reward": 30,
  "img": 'url(https://picsum.photos/301/400)'
}

let card3 = {
  "title": "card3",
  "subject": "english",
  "description": "this is the card's description",
  "author": "@Alec",
  "reward": 40,
  "img": 'url(https://picsum.photos/302/400)'
}


myData.push(card1);
myData.push(card2);
myData.push(card3);

export default function Feed() {
    return (
        <div>
          <div className="formHolder">
            <Container triggerText={'Poser une Question'} onSubmit={onSubmit}/>
          </div>
          <div>
            {myData.map((card, i) => 
              <Card 
                no={i}
                title={card.title} 
                subject={card.subject}
                description={card.description}
                author={card.author}
                reward={card.reward}
                img={card.img}
              />)
            }
          </div>
          <Boutons />
        </div>
        
    )  
}






