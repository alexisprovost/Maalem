import React from 'react';
import { NavBar } from './components/Application/NavigationApp.jsx';
import Sidechat from './components/Chat/Sidechat.jsx';
import Feed from './components/Application/Feed.jsx';
import UserProfile from './UserProfile';

import { Container, Row, Col, Button} from 'react-bootstrap';

export default class MainPage extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        filter: 'Aucun filtre',
        showChat: false,
        userName: 'loading',
        nbPoints: 'loading',
        googleID: ''
      }

      this.handler = this.handler.bind(this);
      this.handleShowChat = this.handleShowChat.bind(this);
    }

    async componentDidMount(){
      const url = "http://localhost:9000/auth";
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
      });
      try {
        const data = await response.json(); 
        verifyUser(data.id, data.displayName)
        setTimeout(() => {   
        fetch('http://localhost:9000/1/users')
        .then(response => response.json())
        .then(users => {
          users.map((user) => {
            if(data.id === user.googleid){
              this.setState({userName: user.displayname, nbPoints: user.balance, googleID: data.id})
              data.regid = user._id;
            }
          })
        })
        UserProfile.setProfile(data); 
    
      }, 100);
      }catch (error) {
        window.location.replace("/");
      }
      
      
  }


    handler(newFilter) {
      this.setState({
        filter: newFilter
      })

    }

    handleShowChat(){
      let isVisible = this.state.showChat;
      this.setState({showChat: !isVisible});
    }

    render () {
      
      return (
        <div>
          
          <NavBar handler = {this.handler} displayName={this.state.userName}/> 
          <div>        
            <Row>
              {/*
              <Col id= "chatContainer" xs="3" style={{backgroundColor:"#ececec", height: "89vh", zIndex:"1", "padding": "0"} }>
                {<Button onClick={this.handleShowChat}>Chat</Button>}
                {this.state.showChat ? <div className="themed-container" fluid={true}><Sidechat /></div> : ''}
              </Col>
              */}
              <Col id= "cardContainer" style={{backgroundColor: "f7f7f7", height: "89vh"}}>
                <Container className="themed-container" fluid={true}>
                  <Feed filter={this.state.filter} points={this.state.nbPoints} displayname={this.state.userName} googleid={this.state.id}/>

                </Container>
              </Col>
            </Row>
          </div>
        </div>  
      );
    }

}


async function verifyUser(userID, displayName){      

  let users = await fetch('http://localhost:9000/1/users').then(response => response.json());
  
  let myPromise = new Promise(function(myResolve, myReject) {
    users.map((user) => {
      if(userID === user.googleid){
        myResolve('Found');
      }
    })
    myReject('Not Found');
  })

  myPromise.then(
    function(ok){
    },
    function(err){
      let _data = {
        googleid: userID.toString(),
        balance: 100,
        displayname: displayName
      }
  
      fetch('http://localhost:9000/1/users', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
    }
  )
 
}