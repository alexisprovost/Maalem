import React from 'react';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

/*
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
*/


async function getCards() {
  let url = 'http://localhost:9000/1/cards';
  try {
      let res = await fetch(url,{});
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function readCards() {
  let data = await getCards();
  return data;
}

let myCards = readCards();

export default function Feed() {
    return (
        <div>
          <div className="formHolder">
            <Container triggerText={'Poser une Question'} onSubmit={onSubmit}/>
          </div>
          <div>
            {
              myCards.map((card, i) => 
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



