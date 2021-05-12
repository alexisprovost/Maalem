import React from 'react';
import { Modal, Button, Form} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Poser une question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>
                <div className="form-group">
                    <label htmlFor="title">Titre</label>
                    <input className="form-control" id="title"/>
                </div>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control as="select">
                        <option></option>
                        <option>Français</option>
                        <option>Anglais</option>
                        <option>Espagnol</option>
                        <option>Calcul 1</option>
                        <option>Calcul 2</option>
                        <option>Mathématiques discrètes</option>
                        <option>Algèbre linéaire</option>
                        <option>Chimie générale: la matière</option>
                        <option>Électricité et magnétisme</option>
                        <option>Ondes et physique moderne</option>
                        <option>Philosophie et rationalité</option>
                        <option>L'être humain</option>
                        <option>Éthique et politique</option>
                    </Form.Control>       
                </Form.Group>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input className="form-control" id="description" />
                </div>

                <div className="form-group">
                    <label htmlFor="images">Images</label>
                    <input type="file" id="img" className="form-control" accept="image/*" multiple="multiple"></input>
                </div>

                <Form.Group controlId="formBasicRange">
                    <Form.Label>Récompense</Form.Label>
                    <Form.Control type="range" />
                </Form.Group> 
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Annuler</Button>
          <Button variant="success">Soumettre</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button 
            variant="outline-success" 
            onClick={() => setModalShow(true)}
            style={{marginLeft:'30px'}}
        >
          Poser une question
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  