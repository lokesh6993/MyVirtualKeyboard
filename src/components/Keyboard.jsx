import React, { Component } from 'react';
import Layout from './Layout.jsx';
import keyboardLayout from '../css/keyboardLayout.css';

class Keyboard extends Component {

    constructor() {
        super();
        this.state = {
            value: 'Hi Welcome!',
        }
    }

    onChangeInput(event) {
        let newValue = event.target.value;
        return this.setState({ value: newValue });
    }

    handleButtonClick(newInput) {
        console.log("onButtonClick", newInput);
        let newValue = this.state.value + newInput;
        if (newInput === 'delete') {
            newValue = this.state.value.substring(0, this.state.value.length - 1);
        }
        return this.setState({ value: newValue });
    }

    render() {
        return (
            <div className="demoPage">
                <div className="screenContainer">
                    <textarea
                        className="inputContainer"
                        value={this.state.value}
                        onChange={(e) => this.onChangeInput(e)}
                    />
                </div>
                <Layout handleButtonClick={(newInput) => this.handleButtonClick(newInput)} />
            </div>
        );
    }
}

export default Keyboard;