import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {
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
        const classes = this.state.active ? 'Menu-button Active' : 'Menu-button';

        return (
            <button className={classes} onClick={this.toggle.bind(this)}>
                <span className='Bar'></span>
            </button>
        );
    }
}

export default MenuButton;