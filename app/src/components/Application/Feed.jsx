import React from 'react';
import Card from './cartes/script';
import { Button, Badge } from 'react-bootstrap';
//Feed est le regroupement des cartes
  export default class Feed extends React.Component {


    constructor(props) {
      super(props);
      
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
          //display les cartes si il y en a
        filteredCardsCount = filteredCards.length; 
        if(filteredCardsCount === 0) {
          cardPlaceHolder = <div style={{display: 'flex', justifyContent: 'center', marginTop: '200px'}}>Revenez plus tard lorsque nous aurons d'autres questions!</div>
        }else{
          cardPlaceHolder = filteredCards.map((card, i) => (
            <Card
              cardID = {card._id}
              googleID = {this.props.googleID}
              displayName = {this.props.userName}
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
        }      // dans ce elif, on regarde si le API a des problemes
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
            Points <Badge variant="primary">{this.props.points}</Badge>
            </Button>
          </div>
          
          <div>            
            {cardPlaceHolder}
          </div>
          
        </div>
      )
    }
  }


