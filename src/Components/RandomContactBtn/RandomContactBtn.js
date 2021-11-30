import React from 'react';
import './RandomContactBtn.css'
import contacts from '../../contacts.json'


class RandomContactBtn extends React.Component {
    
    constructor(props) {
        super()

        this.state = {
            pressed: false,
            text: "Add random contact",
        }
    }


    randomNumber(min, max) { 
        return Math.floor(Math.random() * (contacts.length - 0 + 1))
    }


    mainFunc() {
        this.setState({ text: "Random Created", pressed: true })
        setTimeout(() => {
            this.setState({ text: "Add random contact", pressed: false })
        }, 1000)
        this.props.handleClick()
    }


    render() {

        return (
            <div>
                <button onClick={() => {this.mainFunc()}}>{this.state.text}</button>
            </div>
        )
    }

      
}


export default RandomContactBtn