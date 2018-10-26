import React, { Component } from 'react';
import './App.css';
import GetProducts from './Components/GetProducts/GetProducts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetProducts/>
      </div>
    );
  }
}

export default App;
