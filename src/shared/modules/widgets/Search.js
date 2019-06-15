import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    const { apiData } = this.props;
    console.log(apiData);
    
    return (
      <div>
        I m Search
        </div>
    );
  }
}
