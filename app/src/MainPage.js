import React from 'react';
import { NavBar } from './components/navigationApp.jsx';
import Foot from './components/Foot';
import Sidechat from './components/Sidechat';
import Feed from './components/Feed';


import { Container, Row, Col} from 'react-bootstrap';

export default class MainPage extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        filter: 'Aucun filtre'
      }

      this.handler = this.handler.bind(this);
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
              <Col xs="3" style={{backgroundColor:"#ececec", height: "89vh", "z-index":"1"} }>
                <Container className="themed-container" fluid={true}><Sidechat/></Container>
              </Col>
              <Col style={{backgroundColor: "f7f7f7", height: "89vh"}}>
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