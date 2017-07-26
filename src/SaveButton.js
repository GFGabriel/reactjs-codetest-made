import React, { Component } from 'react';
import './SaveButton.css';

class SaveButton extends Component {
    constructor () {
        super();
        this.state = {
            active: false
        }
    }

    componentDidMount () {
        if (this.props.active) {
            this.setState({
                active: true
            });
        }
    }

    toggle () {
        this.setState({
            active: !this.state.active
        });
    }

    render () {
        const classes = this.state.active ? 'Save-button Active' : 'Save-button';

        return (
            <button className={classes} onClick={this.toggle.bind(this)}>
                Save
            </button>
        );
    }
}

export default SaveButton;