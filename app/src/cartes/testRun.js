import React from 'react';
import Boutons from '../boutons/script';
import Card from './script';

class testRun extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [2,3,1988] }; // array denombrant le nombre de cartes, on doit fixer pour que l'app n'y soit pas relie
    }
    render() {
      var box = this.state.data.map((item, i) => {
        console.log(i);
        return React.createElement(Card, { key: i, no: i });
      });
      return React.createElement("div", { className: "testrun" }, 
      
      <div>
        {box}
        <Boutons />
      </div>
);
    }
}

export default testRun;