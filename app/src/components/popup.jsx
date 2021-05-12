import React, { useState, Fragment } from "react";
import { Modal, Button, Form, InputGroup, FormControl} from 'react-bootstrap';


export class MyQuestionModal extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      titre: '',
      sujet: '',
      description: '',
      recompense: 0,
      photos: [''],
      aleatoire: false,
      showHide: false

    }

  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

  handleAddFields = () => {
    const fields = this.state.photos;
    fields.push({ pictureURL: ""});
    this.setState({photos: fields});
  };

  handleRemoveFields = (index) => {
    const fields = this.state.photos;
    if(fields.length > 1){
      fields.splice(index, 1);
      this.setState({photos: fields});
    }
  };

  handleCheckbox = (event) => {
    const isChecked = !this.state.aleatoire;
    this.setState({aleatoire: isChecked})
  }

  render(){
    return(
      <>    
        <Button 
          variant="outline-success" 
          onClick={() => this.handleModalShowHide()}
          style={{marginLeft:'30px'}}
        >
          Poser une question
        </Button>

        <Modal show={this.state.showHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title id="contained-modal-title-vcenter">
              Poser une question
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>

              <Form.Group>
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group>
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

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Récompense</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Photos</Form.Label>
                <br/>
              </Form.Group>  

              {this.state.aleatoire ? '' :              
                this.state.photos.map((photoURL, index) =>(
                  <div className="form-row">
                    <Fragment key={`${photoURL}~${index}`}>
                      <div className="form-group col-sm-6">
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon3">
                              https://i.imgur.com/
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                      </div>
                      <div className="form-group col-sm-2">
                        <button
                          className="btn btn-link"
                          type="button"
                          onClick={() => this.handleRemoveFields(index)}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-link"
                          type="button"
                          onClick={() => this.handleAddFields()}
                        >
                          +
                        </button>
                      </div>
                    </Fragment>
                  </div> 
                ))               
              }
              
              <Form.Check 
                aria-label="option 1" 
                label="Cochez pour générer des images aléatoires (uniquement pour tester)" 
                onChange={() => this.handleCheckbox()}
              />          

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={() => this.handleModalShowHide()}>Annuler</Button>
            <Button variant="success">Soumettre</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}
  