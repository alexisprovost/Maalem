import React from 'react';
import { render } from 'react-dom';
import Boutons from "../boutons/script";
import Card from '../cartes/script';
import { Container } from '../Popup/Container';
import { ListGroup, Button, Spinner} from 'react-bootstrap';
import { Badge} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};

  export default class Feed extends React.Component {


    constructor() {
      super();
      
      this.state = { 
        cards: [],
        isLoaded: 'Loading'
      };
    }


    async componentDidMount() {
      const response = await fetch(`http://localhost:9000/1/cards`);
      const json = await response.json();

      this.setState({ 
        cards: json,
        isLoaded: response.status == 200
      });
    }

    render() {
      
      let filter = this.props.filter;
      let filteredCardsCount = 'Loading';
      let filteredCards = [];
      let cardPlaceHolder = <Spinner animation="border" variant="primary"/>;
      
      if(this.state.isLoaded == true){
        filteredCards = this.state.cards.filter(
          function(card) {
            if(filter == 'Aucun filtre') {return true}
            else{return card.subject == filter}                 
          }
        );
          
        filteredCardsCount = filteredCards.length; 
        if(filteredCardsCount == 0) {
          cardPlaceHolder = 'Revenez plus tard lorsque nous aurons d\'autres questions!'
        }else{
          cardPlaceHolder = filteredCards.map((card, i) => (
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
      }else if(this.state.isLoaded == false){
        filteredCardsCount = 'N/A';
        cardPlaceHolder = 'Échec de la récupération des cartes à partir de l\'API. Si vous êtes enseignant, c\'est probablement parce que vous n\'avez pas initialisé correctement le serveur. Dans ce cas, veuillez relire le fichier \'readme.md\'. Merci pour votre compréhension.';
      }

     
      
      return (
        <div>
          <div style={{marginTop:'20px'}}>
            <Button variant="primary">
            {filter} <Badge variant="primary">{filteredCardsCount}</Badge>
            </Button>            
            <Button variant="primary" style={{position: 'absolute', right: '30px'}}>
            Points <Badge variant="primary">N/A</Badge>
            </Button>
          </div>
          
          <div>            
            {cardPlaceHolder}
          </div>
          
          <div>
            <Boutons />
          </div>

        </div>
      )
    }
  }


