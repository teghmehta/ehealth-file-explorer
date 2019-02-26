import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import AppDiv from "./components/Apps/AppDiv";
import AppsContainer from "./components/Apps/AppsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AppsContainer/>
      </div>
    );
  }
}

export default App;
