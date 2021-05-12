export const Header = (props) => {
    return (
      <header id='header'>
        <div className='intro' style={{backgroundImage: "url(" + 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' + ')'}}>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text' style={{margin:'auto'}}>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Apprenez plus
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }