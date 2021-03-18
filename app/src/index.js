import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import testRun from './cartes/testRun';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
//ReactDOM.render( /*#__PURE__*/React.createElement(testRun, null), document.getElementById('root'));


if (module.hot) {
    module.hot.accept();
}