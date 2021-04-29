import React from 'react';
import { render } from 'react-dom';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

  export default class Feed extends React.Component {

    constructor() {
      super();
      this.state = { data: [] };
    }

    async componentDidMount() {
      const response = await fetch(`http://localhost:9000/1/cards`);
      const json = await response.json();
      this.setState({ data: json });
    }

    render() {
      return (
        <div>
          <div className="formHolder">
            <Container triggerText={'Poser une Question'} onSubmit={onSubmit}/>
          </div>
          <div>            
            {
              this.state.data.map((card, i) => (
                <Card
                  no = {i}
                  author = {card.author}
                  description = {card.description}
                  subject = {card.subject}
                  reward = {card.reward}
                  title = {card.title}
                  img = {'url(' + card.image[0] + ')'}
                />
              ))
            }
          </div>
          <Boutons />
        </div>
      )
    }
  }


