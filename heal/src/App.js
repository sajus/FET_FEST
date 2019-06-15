import React from 'react';
import './App.css';
import Card from './Card'

var cardObj = {
  "disease": "Lymphoma",
  "symptoms": {
    "lesion": false,
    "fever": true,
    "welt": false,
    "transaminitis": false,
    "decreased body weight": true,
    "ataxia": false,
    "superimposition": true,
  }
};
function App() {
  return (
    <div className="App">
      <Card key={cardObj} disease={cardObj.disease} symptoms={cardObj.symptoms} />
    </div>
  );
}

export default App;
