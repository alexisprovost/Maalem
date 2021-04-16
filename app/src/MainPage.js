import React from 'react';
import NavBar from './components/Nav';
import Foot from './components/Foot';
import Chat from './components/chatPreview';
import Feed from './Feed';

import { Container, Row, Col} from 'react-bootstrap';

export default function MainPage() {
    return (
      <div>
        <NavBar /> 
        <div>        
          <Row>
            <Col xs="3" style={{backgroundColor: "red"}}>
              <Container className="themed-container" fluid={true}><Chat/></Container>
            </Col>
            <Col style={{backgroundColor: "green"}}>
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