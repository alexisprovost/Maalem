import React, { useState, Fragment } from "react";
import { Modal, Button, Form, InputGroup, FormControl} from 'react-bootstrap';
import {changeRoom} from '../Chat/Chat'
import UserProfile from '../../UserProfile.js'
//Formulaire pour poser une question
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
    fields.push("");
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
    this.setState({aleatoire: isChecked});
    if(isChecked){
      this.setState({photos: ['https://picsum.photos/300/400','https://picsum.photos/300/400','https://picsum.photos/300/400']});
    }
  }

  onInputChange = (event) => {
    switch(event.target.name){
      case 'Titre': this.setState({titre: event.target.value}); break;
      case 'Sujet': this.setState({sujet: event.target.value}); break;
      case 'Description': this.setState({description: event.target.value}); break;
      case 'Recompense': this.setState({recompense: event.target.value}); break;
    }
    if(event.target.name.includes('images')){
      const fieldName = event.target.name;
      const imageLinkIndex = parseInt(fieldName[fieldName.length - 1]);
    
      let images = Object.assign({}, this.state.photos);
      images[imageLinkIndex] = event.target.value;

      this.setState({photos: Object.values(images)});
    }
  }

  onSubmit = () => {

    let _data = {
      title: this.state.titre,
      subject: this.state.sujet,
      description: this.state.description,
      images: this.state.photos,
      author: UserProfile.getProfile().id,
      rewards: 0
    }
//envoit la question posee dans la base de donnees
    fetch('http://localhost:9000/1/cards', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })


      window.open('/chat?user=' + UserProfile.getProfile().id +'&room=' + UserProfile.getProfile().id, '_blank').focus();
    this.handleModalShowHide();


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
                <Form.Control type="text" name="Titre" onChange = {(event) => this.onInputChange(event)} />
              </Form.Group>

              <Form.Group>
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control as="select" name="Sujet" onChange = {(event) => this.onInputChange(event)}>
                      {/* Dropdown avec les options */}
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
                <Form.Control type="text" name="Description" onChange = {(event) => this.onInputChange(event)}/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Récompense</Form.Label>
                <Form.Control type="number" name="Recompense" onChange = {(event) => this.onInputChange(event)}/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Photos</Form.Label>
                <br/>
              </Form.Group>  

              {             
                this.state.photos.map((photoURL, index) =>(
                  <div className="form-row">
                    <Fragment key={`${photoURL}~${index}`}>
                      <div className="form-group col-sm-6">
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon3">
                            https://
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                          <FormControl id="basic-url" name={'images' + index} onChange={(event) => this.onInputChange(event)} value={this.state.photos[index]}/>
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
                name="Check"
              />          

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={() => this.handleModalShowHide()}>Annuler</Button>
            <Button variant="success" onClick={() => this.onSubmit()}>Soumettre</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}
  