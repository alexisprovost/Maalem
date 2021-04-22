import React from 'react';
import NavBar from './components/Nav';
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
            <Col xs="3" style={{backgroundColor:"red", height: "89vh"} }>
              <Container className="themed-container" fluid={true}><Sidechat/></Container>
            </Col>
            <Col style={{backgroundColor: "green"}}>
              <Container className="themed-container" fluid={true}>
                <Feed />

              </Container>
            </Col>
          </Row>
        </div>
        <Foot/>
      </div>  
    );
}