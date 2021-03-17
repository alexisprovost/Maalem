import React from 'react';
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
        return /*#__PURE__*/React.createElement(Card, { key: i, no: i });
      });
      return /*#__PURE__*/React.createElement("div", { className: "testrun" }, box);
    }
}
export default testRun;