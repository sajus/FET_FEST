import React, { Component } from 'react';
import axios from 'axios';

export default class DynamicContent extends Component {
  constructor() {
    super();
    this.state = {
      loading: 'notloaded',
      response: null
    };
  }
  callApi = (apiDetails) => {
    axios.get(apiDetails.api)
    .then(res => {
        apiDetails.response.forEach(key => {
          res = res[key];
        })
        this.setState({ response: res, loading: 'loaded' });
    })
    .catch(err => {
      console.error(err);
    })
  }
  generateContent = () => {
    const { response } = this.state;
    let { staticHTML, apiDetails } = this.props;
    if(staticHTML) {
      apiDetails.mapping.forEach(item => {
        let regex = new RegExp(item.from, 'g');
        let newText = response;
        item.to.forEach(key => {
            newText = newText[key]
        });
        staticHTML = staticHTML.replace(regex, newText);
      })
      return staticHTML;
    }
    return '';
  }
  render() {
    const { apiDetails } = this.props;
    const { loading } = this.state;
    if(loading === 'notloaded') {
      this.callApi(apiDetails);
    }
    if(loading === 'loaded') {
      return (
        <div dangerouslySetInnerHTML={{__html: this.generateContent() }}></div>
      );
    }
    return null;
  }
}
