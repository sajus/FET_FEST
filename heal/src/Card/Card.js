import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    const sympObjLoop = new Array(this.props.symptoms).map((value, key) => {
      return (
        <div class="row">
          <div class="col s12 m12" key={key}>
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title diseaseTitle">{this.props.disease}</span>
                <div>
                  {
                    Object.keys(value).map((val, k) => {
                      return (<span k={k}>{val}</span>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })


    return (
      <div className="centerAlign">
        {sympObjLoop}
      </div>
    );
  }
}

export default Card;
