import React, { Component } from 'react'
import ExceptionHandler from './modules/ExceptionHandler';

class Core extends Component {
  constructor(props) {
    super(props)

    let component;

    if (this.props.isBrowser) {
      component = window.__SLOT_DATA__
      delete window.__SLOT_DATA__
    } else {      
      component = this.props.staticContext.data;
    }

    this.state = {
      component,
      loading: component ? false : true,
    }
  }
  
  componentCollection() {
    const { component: comp } = this.state;
    const { isBrowser } = this.props;
    const renderedComponents = [];
    comp.forEach((item) => {
      if (isBrowser || item.serverSide) {
        let Comp;
        Comp = require('./modules/widgets/' + item.component).default;
        renderedComponents.push(
          <Comp {...item} metaInfo={(item.meta && item.meta.meta) ? item.meta.meta : {}} {...this.props} />
        );
      }
    })
    
    return renderedComponents;
  }

  render() {
    const { loading } = this.state

    if (loading === true) {
      return <p>LOADING</p>
    }

    return (
      <ExceptionHandler>
        {this.componentCollection()}
      </ExceptionHandler>
    )
  }
}

export default Core;
