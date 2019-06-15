import React from 'react';

class Symptoms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "symptoms": props.symptoms,
    };
  }

  render() {
    return (
      <div className="card">
        <div className="disease">
          {this.props.disease}
        </div>

        <div className="symptom">
          {
            <div>
              {Object.keys(this.state.symptoms).map((item, index) => {
                return (
                  <span key={index} className={this.state.symptoms[item] ? 'selected' : 'unselected'}>
                    <i className="material-icons">check_circle</i>
                    {item}
                  </span>
                )
              })}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Symptoms;