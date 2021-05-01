import React from 'react';
import { render } from 'react-dom';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';
import { ListGroup, Button} from 'react-bootstrap';
import { Badge} from 'react-bootstrap';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

  export default class Feed extends React.Component {

    constructor() {
      super();
      
      this.state = { 
        cards: []
      };
    }

    async componentDidMount() {
      const response = await fetch(`http://localhost:9000/1/cards`);
      const json = await response.json();
      this.setState({ 
        cards: json
      });
    }

    render() {
      return (
        <div>
          <div style={{marginTop:'20px'}}>
            <Button variant="primary">
            {this.props.filter} <Badge variant="primary">N/A</Badge>
            </Button>            
            <Button variant="primary" style={{position: 'absolute', right: '30px'}}>
            Points <Badge variant="primary">N/A</Badge>
            </Button>
          </div>
          
          <div>            
            {
              this.state.cards.map((card, i) => (
                <Card
                  no = {i}
                  author = {card.author}
                  description = {card.description}
                  subject = {card.subject}
                  reward = {card.reward}
                  title = {card.title}
                  img = {card.image}
               />
              ))
            }
          </div>
          <div>
            <Boutons />
          </div>

        </div>
      )
    }
  }


