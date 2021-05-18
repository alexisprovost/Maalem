import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
//Pour nous contacter, sur la page d'acceuil
  const handleSubmit = (e) => {
    e.preventDefault()
    window.open('mailto:alectufenkjian@gmail.com?subject=Message&body=' + message);
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contactez-nous</h2>
                <p>
                  Veuillez nous écrire un message ci-dessous pour nous envoyer un courriel et nous vous recontacterons le plus tôt possible.
                </p>
              </div>
              <form name='sentMessage' validate='true' onSubmit={handleSubmit}>
                <div className='form-group' style={{width:'300%'}}>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Envoyer
                </button>
                <div id='success'></div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
