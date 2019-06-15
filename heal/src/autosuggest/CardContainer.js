import React from 'react';
import Card from './Card';

class CardContainer extends React.Component {
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

        this.setState({ "disease": disease });
      });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.disease.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col s12 m10 card">
                <Card key={item.id} disease={item['disease']} symptoms={item['symptoms']} />
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default CardContainer;