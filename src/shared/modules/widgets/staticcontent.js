import React, { Component } from 'react';

export default class StaticContent extends Component {
  render() {
    const { staticHTML } = this.props;
    return (
      <div dangerouslySetInnerHTML={{__html: staticHTML || '' }}></div>
    );
  }
}
