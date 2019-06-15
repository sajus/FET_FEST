import React from 'react';
import Symptoms from './Symptoms';

class Disease extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "disease": [],
    };
  }

  componentWillMount() {
    let disease = [];

    fetch('https://api.myjson.com/bins/9vrc9', {
      'method': 'get',
    })
      .then(response => response.json())
      .then(data => {
        for (let key in data) {
          let array = data[key];
          for (let prop in array) {
            disease.push(array[prop]);
          }
        }

        this.setState({"disease": disease});
      });
  }

  render() {
    return (
      <div className="disease">
        <h2>
          {this.state.disease.map((item, index) => {
            return (
              <div key={index}>
                <Symptoms key={item.id} disease={item['disease']} symptoms={item['symptoms']} />
              </div>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default Disease;