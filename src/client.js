import React from 'react';
import { hydrate } from 'react-dom';
import App from './shared/App';
import { BrowserRouter as Router } from 'react-router-dom';

require('lazysizes');

class Main extends React.Component {

  constructor() {
    super();
    (() => {
      const elem = document.getElementById("ssr-spinner");
      if(elem) elem.parentElement.removeChild(elem);
    })();
  }
  
  render() {
    return <App apiData={window.__INITIAL_DATA__}  isBrowser={true}/>;
  }
}

hydrate(
    <Router>
      <Main />
    </Router>,
  document.getElementById('app')
);
