export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Maalem
          </a>{' '}
          <a href="/app" class="page-scroll" style={{
              position: 'absolute', 
              right: '100px', 
              fontFamily: 'Lato', 
              textTransform: 'uppercase', 
              color: '#555', 
              margin: '9px 20px 0 20px',
              padding: '5px 2px'
            }}>Connectez-vous</a>
        </div>
      </div>
    </nav>
  )
}

