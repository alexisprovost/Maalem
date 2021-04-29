import React from 'react';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

let cards = [];

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
  data.map((card) => {
    cards.push(card.author);
  })  
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

            
            
              cards.map((card, i) => 
                <Card 
                  no={i}
                  //title={card.title} 
                  //subject={card.subject}
                  //description={card.description}
                  author={card.author}
                  //reward={card.reward}
                  //img={card.img}
              />)

            }
          </div>
          <Boutons />
        </div>
        
    )  
}



