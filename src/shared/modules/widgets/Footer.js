import React, { Component } from 'react';
import ImageLoader from '../utils/imageLoader';

export default class Footer extends Component {
  render() {

    const { apiData } = this.props;
    // const records = apiData.offers.hits;

    const { isBrowser, isAmp } = this.props;
    return (
      <div>
        I am Footer
      </div>
    );
  }
}
