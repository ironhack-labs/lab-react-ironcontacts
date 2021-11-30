import React from 'react';
import './SortByNameBtn.css'


class SortByNameBtn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pressed: false,
            text: "Sort by Name",
        }
    }


    mainFunc() {
        this.setState({ text: "Sorted", pressed: true })
        setTimeout(() => {
            this.setState({ text: "Sort by Name", pressed: false })
        }, 1000)
        this.props.sortByName()
    }


    render() {

        return (
            <div>
                <button className="sort-btn" onClick={() => {this.mainFunc()}}>{this.state.text}</button>
            </div>
        )
    }


}


export default SortByNameBtn