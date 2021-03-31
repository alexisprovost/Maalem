import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>

      <h2>Poser une question</h2>

      <div className="form-group">
        <label htmlFor="title">Titre</label>
        <input className="form-control" id="title" />
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
        <label htmlFor="recompense">Récompense</label>
        <input type="number" className="form-control" id="recompense" />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
