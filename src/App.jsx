import React, { Component } from 'react';
import ItemList from './components/ItemList.jsx'

class App extends Component {
  render() {

    //let groceryData = [{purchased: name: 'Apple', price: '5'}, {name: 'Banana', price: '2'}, {name: 'Cherries', price: '3'}];

    return (
      <div>        
        <ItemList/>
      </div>
    );
  }
}

export default App;