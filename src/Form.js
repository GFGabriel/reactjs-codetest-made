import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  render() {
    return (
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
    );
  }
}

export default Form;