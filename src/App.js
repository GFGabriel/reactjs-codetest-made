import React, { Component } from 'react';
import logo from './images/img-profile.png';
import './App.css';
import MenuButton from './MenuButton'
import SaveButton from './SaveButton'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <MenuButton/>
          <h1>Profile</h1>
        </div>
        <div className="Main-area">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="Form-group">
              <Form/>
              <div className="Save-button-container">
                <SaveButton/>
              </div>
            </div>
        </div>
        <div className="Footer">

        </div>
      </div>
    );
  }
}

export default App;
