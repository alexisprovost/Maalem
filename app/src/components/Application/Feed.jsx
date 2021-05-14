import React from 'react';
import Card from './cartes/script';
import { Button, Badge } from 'react-bootstrap';

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
        isLoaded: response.status === 200
      });
    }

    render() {
      
      let filter = this.props.filter;
      let filteredCardsCount = 'Loading';
      let filteredCards = [];
      let cardPlaceHolder = <div style={{display: 'flex', justifyContent: 'center', marginTop: '200px'}}>Loading</div>;
      
      if(this.state.isLoaded === true){
        filteredCards = this.state.cards.filter(
          function(card) {
            if(filter === 'Aucun filtre') {return true}
            else{return card.subject === filter}                 
          }
        );
          
        filteredCardsCount = filteredCards.length; 
        if(filteredCardsCount === 0) {
          cardPlaceHolder = <div style={{display: 'flex', justifyContent: 'center', marginTop: '200px'}}>Revenez plus tard lorsque nous aurons d'autres questions!</div>
        }else{
          cardPlaceHolder = filteredCards.map((card, i) => (
            <Card
              if = {card._id}
              key = {i}
              no = {i}
              author = {card.author}
              description = {card.description}
              subject = {card.subject}
              reward = {card.reward}
              title = {card.title}
              img = {card.images}
           /> 
          ))
        }      
      }else if(this.state.isLoaded === false){
        filteredCardsCount = 'N/A';
        cardPlaceHolder = <div style={{display: 'flex', justifyContent: 'center', marginTop: '200px'}}>Échec de la récupération des cartes à partir de l'API.<br />Si vous êtes enseignant, c'est probablement parce que vous n'avez pas initialisé correctement le serveur.<br />Dans ce cas, veuillez relire le fichier 'readme.md'.<br />Merci pour votre compréhension.</div>;
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
            <div style={{marginTop: '575px', textAlign: 'center'}}>
              <Button variant="danger" style={{width: '150px', marginRight: '10px'}}>Ignorer</Button>
              <Button variant="success" style={{width: '150px', marginLeft: '10px'}}>Répondre</Button>                    
            </div>
          </div>

        </div>
      )
    }
  }


