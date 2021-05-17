import React from 'react';
import { NavBar } from './components/Application/NavigationApp.jsx';
import Sidechat from './components/Application/Sidechat.jsx';
import Feed from './components/Application/Feed.jsx';
import UserProfile from './UserProfile';

import { Container, Row, Col} from 'react-bootstrap';

export default class MainPage extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        filter: 'Aucun filtre'
      }

      this.handler = this.handler.bind(this);
    }

    async componentDidMount(){
      const url = "http://localhost:9000/auth";
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
      });
      try {
        const data = await response.json();
        UserProfile.setProfile(data);
        console.log(UserProfile.getProfile());
      } catch (error) {
        console.log("User is not loggedin redirecting...");
        window.location.replace("/");
      }
    }

    handler(newFilter) {
      this.setState({
        filter: newFilter
      })

    }

    render () {
      
      return (
        <div>
          
          <NavBar handler = {this.handler}/> 
          <div>        
            <Row>
              <Col id= "chatContainer" xs="3" style={{backgroundColor:"#ececec", height: "89vh", zIndex:"1", "padding": "0"} }>
                <div className="themed-container" fluid={true}><Sidechat/></div>
              </Col>
              <Col id= "cardContainer" style={{backgroundColor: "f7f7f7", height: "89vh"}}>
                <Container className="themed-container" fluid={true}>
                  <Feed filter={this.state.filter}/>

                </Container>
              </Col>
            </Row>
          </div>
        </div>  
      );
    }

}