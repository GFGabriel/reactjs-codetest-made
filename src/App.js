import React, { Component } from 'react';
import logo from './images/img-profile.png';
import './App.css';
import MenuButton from './MenuButton'
import SaveButton from './SaveButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav-bar">
          <MenuButton/>
          <h1>Profile</h1>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Form">
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Jane Doe"/>
          <label htmlFor="Job-title">Job Title</label>
          <input type="text" placeholder="Developer"/>
          <label htmlFor="Job-title">Birthday</label>
          <input type="text" placeholder="mm/dd/yy"/>
          <label htmlFor="Bio">Bio</label>
          <textarea name="Bio" id="" cols="30" rows="10" placeholder="A few words about yourself..."/>
        </div>
        <div className="Save-button-container">
          <SaveButton/>
        </div>
        <div className="Footer">

        </div>
      </div>
    );
  }
}

export default App;
