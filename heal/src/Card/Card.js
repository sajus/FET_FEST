import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "symptoms": props.symptoms,
    };
  }

  render() {
    const sympObjLoop = new Array(this.props.symptoms).map((item, index) => {
      return (
        <div className="card-content" key={index}>
          <span className="card-title disease-title">{this.props.disease}</span>
          <div className="symptom-list">
            {Object.keys(this.state.symptoms).map((item, index) => {
              return (
                <span key={index} className={"symptom " + (this.state.symptoms[item] ? 'selected' : 'unselected')}>
                  <i className="material-icons">check_circle_outline</i>
                  <span className="symptom-value">{item}</span>
                </span>
              )
            })}
          </div>
        </div>
      )
    })


    return (
      <div>
        {sympObjLoop}
      </div>
    );
  }
}

export default Card;
