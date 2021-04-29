import React from 'react';
import { NavBar } from './components/navigationApp.jsx';
import Foot from './components/Foot';
import Sidechat from './components/Sidechat';
import Feed from './components/Feed';

import { Container, Row, Col} from 'react-bootstrap';

export default function MainPage() {
    return (
      <div>
        <NavBar /> 
        <div>        
          <Row>
            <Col xs="3" style={{backgroundColor:"#ececec", height: "89vh", "z-index":"1"} }>
              <Container className="themed-container" fluid={true}><Sidechat/></Container>
            </Col>
            <Col style={{backgroundColor: "f7f7f7", height: "89vh"}}>
              <Container className="themed-container" fluid={true}>
                <Feed />

              </Container>
            </Col>
          </Row>
        </div>
        <Foot />
      </div>  
    );
}