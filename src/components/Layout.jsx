import React, { Component } from 'react';
import keyboardLayout from '../css/keyboardLayout.css';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            capsLock: false,
            numbersList: { "~": "`", "!": "1", "@": "2", "#": "3", "$": "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", "_": "-", "+": "=" },
            chars: { "Q": "q", "W": "w", "E": "e", "R": "r", "T": "t", "Y": "y", "U": "u", "I": "i", "O": "o", "P": "p", "{": "[", "}": "]", "|": "92", "A": "a", "S": "s", "D": "d", "F": "f", "G": "g", "H": "h", "J": "j", "K": "k", "L": "l", ":": ";", '"': "'", "Z": "z", "X": "x", "C": "c", "V": "v", "B": "b", "N": "n", "M": "m", "<": ",", ">": ".", "/": "?", },
            specialFunctionKeys: { "backspace": "delete", "tab": "tab", "caps": "caps", "enter": "< enter", "shift": "shift", "commercialDomain": ".com", "at": "@", "spaceBar": "space" }
        }
        this.keyOrderAndInputChange = this.keyOrderAndInputChange.bind(this);
        this.keyCaseChange = this.keyCaseChange.bind(this);
    }

    keyOrderAndInputChange(char) {

        let randomNumbers = {};
        let numKeys = Object.keys(this.state.numbersList).map((key) => { return key });
        numKeys.sort(() => { return Math.random() - 0.5; });
        numKeys.forEach((key) => {
            randomNumbers[key] = this.state.numbersList[key];
        });

        let randomChars = {};
        let charKeys = Object.keys(this.state.chars).map((key) => { return key });
        charKeys.sort(() => { return Math.random() - 0.5; });
        charKeys.forEach((key) => {
            randomChars[key] = this.state.chars[key];
        });

        this.props.handleButtonClick(char.target.firstChild.data);

        this.setState({ numbersList: randomNumbers, chars: randomChars });
    }

    keyCaseChange() {
        this.setState({ capsLock: !this.state.capsLock });
    }

    render() {

        let numberKeyContainer = this.state.capsLock ? Object.keys(this.state.numbersList).map((num, i) => {
            return (
                <React.Fragment><button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{num}</button >{
                    i === 12 ? <React.Fragment><button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('delete') }}>{this.state.specialFunctionKeys.backspace}</button><br />
                        <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('\t') }}>{this.state.specialFunctionKeys.tab}</button>
                    </React.Fragment> : ''}</React.Fragment>
            )
        }) : Object.values(this.state.numbersList).map((num, i) => {
            return (
                <React.Fragment><button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{num}</button >{
                    i === 12 ? <React.Fragment><button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('delete') }}>{this.state.specialFunctionKeys.backspace}</button><br />
                        <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('\t') }}>{this.state.specialFunctionKeys.tab}</button>
                    </React.Fragment> : ''}</React.Fragment>
            )
        })



        let keyContainer = this.state.capsLock ? Object.keys(this.state.chars).map((char, i) => {
            switch (i) {
                case 12:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                            <br />
                            <button className="keyboard__key keyboard__key--wide" onClick={this.keyCaseChange}>{this.state.specialFunctionKeys.caps}</button>
                        </React.Fragment>
                    )

                case 22:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                            <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('\n') }}>{this.state.specialFunctionKeys.enter}</button>
                            <br />
                            <button className="keyboard__key keyboard__key--wide" onClick={this.keyCaseChange}>{this.state.specialFunctionKeys.shift}</button>
                        </React.Fragment>
                    )

                case 33:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                            <button className="keyboard__key keyboard__key--wide" onClick={this.keyCaseChange}>{this.state.specialFunctionKeys.shift}</button>
                            <br />
                            <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('.com') }}>{this.state.specialFunctionKeys.commercialDomain}</button>
                            <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('@') }}>{this.state.specialFunctionKeys.at}</button>
                            <button className="keyboard__key keyboard__key--extra-wide" onClick={() => { this.props.handleButtonClick(' ') }}>{this.state.specialFunctionKeys.spaceBar}</button>
                        </React.Fragment>
                    )

                default:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                        </React.Fragment>
                    )
            }
        }) : Object.values(this.state.chars).map((char, i) => {
            if (char === "92") {
                char = String.fromCharCode(92);
            }

            switch (i) {
                case 12:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                            <br />
                            <button className="keyboard__key keyboard__key--wide" onClick={this.keyCaseChange}>{this.state.specialFunctionKeys.caps}</button>
                        </React.Fragment>
                    )

                case 22:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                            <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('\n') }}>{this.state.specialFunctionKeys.enter}</button>
                            <br />
                            <button className="keyboard__key keyboard__key--wide" onClick={this.keyCaseChange}>{this.state.specialFunctionKeys.shift}</button>
                        </React.Fragment>
                    )

                case 33:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                            <button className="keyboard__key keyboard__key--wide" onClick={this.keyCaseChange}>{this.state.specialFunctionKeys.shift}</button>
                            <br />
                            <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('.com') }}>{this.state.specialFunctionKeys.commercialDomain}</button>
                            <button className="keyboard__key keyboard__key--wide" onClick={() => { this.props.handleButtonClick('@') }}>{this.state.specialFunctionKeys.at}</button>
                            <button className="keyboard__key keyboard__key--extra-wide" onClick={() => { this.props.handleButtonClick(' ') }}>{this.state.specialFunctionKeys.spaceBar}</button>
                        </React.Fragment>
                    )

                default:
                    return (
                        <React.Fragment>
                            <button className="keyboard__key" onClick={this.keyOrderAndInputChange}>{char}</button>
                        </React.Fragment>
                    )
            }
        })

        return (
            <div className="keyboard"><div className="keyboard__keys">{numberKeyContainer}{keyContainer}</div></div>
        );
    }
}

export default Layout;