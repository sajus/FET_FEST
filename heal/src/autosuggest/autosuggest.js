import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class Autosuggest extends Component {
 constructor(props){
   super(props);

   this.items = [];
    this.state = {
        suggestions: [],
        selectText:"",
    };
 }

 componentDidMount = () => {  
   fetch('https://api.myjson.com/bins/k8xr5')
  .then(response => response.json())
  .then(myJson => {
     console.log(myJson.symptoms);
    this.items.push(myJson.symptoms);
    
    console.log(this.items);
  });
 }
 

 onTextChanged = (e) => {
   const myValue = e.target.value;
   if(myValue.length === 0 )
    this.setState(() => ({suggestions:[],selectedText:""}));
    else
    {
      const regex = new RegExp(`^.*${myValue}.*$`,'i');
      const myArray = this.items[0].sort().filter( (v) => regex.test(v));
      var suggestions = myArray.filter((v, i, a) => a.indexOf(v) === i);
      this.setState(() => ({"suggestions": suggestions, selectText:myValue }));
    }
 }

 suggestionSelected (selectedVal){
   this.setState(() => ({text:selectedVal, suggestions: [],}))
 }


 renderSuggestions(){
    const suggestions = this.state.suggestions;
    if( suggestions.length === 0 )
      return null;
   return(
     <div>
       {suggestions.map((item) => <p onClick={() => this.suggestionSelected(item)}>{item}</p>)}
     </div>
   )
 }
  render() {
    const { selectText } = this.state;
    return <div>
        <input type="text" onChange={this.onTextChanged} value={selectText}/>
        <div>
          {this.renderSuggestions()}
        </div>
        
      </div>;

  }
}

export default Autosuggest;
