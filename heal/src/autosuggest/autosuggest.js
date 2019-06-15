import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class Autosuggest extends Component {
 constructor(props){
   super(props);

   this.items = [];
   //this.items = ["pain","pain in d ass","no pain no gain","painkiller","joint pain"];
    this.state = {
        suggestions: [],
    };
 }

 componentDidMount = () => {
   /*fetch('https://api.myjson.com/bins/k8xr5').then(res => res.json).then( data => {
     this.items.push(data.symptoms);
     console.log(this.items);
    });*/
   
   fetch('https://api.myjson.com/bins/k8xr5')
  .then(response => response.json())
  .then(myJson => {
    // console.log(JSON.stringify(myJson.symptoms));
     console.log(myJson.symptoms);
    this.items.push(myJson.symptoms);
    
    console.log(this.items);
  });
 }
 

 onTextChanged = (e) => {
   const value = e.target.value;
   if(value.length === 0 )
    this.setState(() => ({suggestions:[]}));
    else
    {
      const regex = new RegExp(`^.*${value}.*$`,'i');
      const suggestions = this.items[0].sort().filter( (v) => regex.test(v));
      this.setState(() => ({"suggestions": suggestions }));
    }
 }

 renderSuggestions(){
    const suggestions = this.state.suggestions;
    let list;
    // console.log(suggestions)
    if( suggestions.length === 0 )
      return null;
    else {
      let array = [];
      // list = suggestions.map((items) => items);
      // console.log(list);
      for (let i = 0; i < suggestions.length; i++) {
        array.push(<p key={i}>{suggestions[i]}</p>);
      }

      console.log(array);
      return <p>{array}</p>
    }
 }
  render() {
    return <div>
        <input type="text" onChange={this.onTextChanged} />
        <div>
          {this.renderSuggestions()}
        </div>
        
      </div>;

  }
}

export default Autosuggest;
