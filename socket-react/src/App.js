import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

start (props) {
  super(props);

  subscribeToTimer((err, timestamp) => this.setState({ 
    timestamp 
  }));
}

state = {
  timestamp: Date.now();
}

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="App">
      <p className="App-intro">
      This is the timer value: {this.state.timestamp}
      </p>
    </div>
    );
  }
}

export default App;
