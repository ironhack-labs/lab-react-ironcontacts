import React from 'react';
import './DeleteBtn.css'


class DeleteBtn extends React.Component {

    constructor(props) {
        super()

        this.state= {
            pressed: false,
            text: "Delete"

        }
    }


    mainFunc() {
        this.setState({ text: "Deleted", pressed: true })
        setTimeout(() => {
            this.setState({ text: "Delete", pressed: false })
        }, 1000)
        this.props.deleteContact()
    }


    render() {

        return (
            <div>
                <button className="delete-btn" onClick={() => {this.mainFunc()}}>{this.state.text}</button>
            </div>
        )
    }


}


export default DeleteBtn