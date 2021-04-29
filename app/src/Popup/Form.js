import React from 'react';

//Form
export const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault(event);

    const requestOptions = {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: document.getElementById('title').value, 
                             subject: document.getElementById('subject').value,
                            description: document.getElementById('description').value,
                            comments: 'msg',
                            author: 'me',
                            reward: document.getElementById('recompense').value})
                             
  };
  fetch('http://localhost:9000/1/cards', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  };
  return (
    <form onSubmit={handleSubmit}>

      <h3>Poser une question</h3>

      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input className="form-control" id="title"/>
      </div>

      <div className="form-group">
        <label htmlFor="subject">Sujet</label>
        <input className="form-control" id="subject" />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input className="form-control" id="description" />
      </div>

      <div className="form-group">
        <label htmlFor="images">Images</label>
        <input type="file" id="img" className="form-control" accept="image/*"></input>
      </div>

      <div className="form-group">
        <label htmlFor="recompense">RÃ©compense</label>
        <input type="number" className="form-control" id="recompense" />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Soumettre
        </button>
      </div>
    </form>
  );
};

export default Form;