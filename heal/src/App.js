import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autosuggest from './autosuggest/autosuggest';
import CardContainer from './Card/CardContainer';

function App() {
  return (
    <div className="App">
      <Autosuggest/>
      <CardContainer />
    </div>
  );
}

export default App;
