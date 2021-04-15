import React from 'react';
import Card from './script';

class testRun extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [2,3,1988] }; // array denombrant le nombre de cartes, on doit fixer pour que l'app n'y soit pas relie
    }

    render() {
      
      
      return(
        <div className="testrun">
            
            {this.state.data.map((item, i) => {
              return(
                <Card key={i} no={i}/>
              )
            })}
            
        </div>
      )

    }
}

export default testRun;