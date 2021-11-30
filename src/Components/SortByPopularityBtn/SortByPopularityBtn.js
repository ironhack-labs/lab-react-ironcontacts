import React from 'react';
import './SortByPopularityBtn.css'


class SortByPopularityBtn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pressed: false,
            text: "Sort by Popularity",
        }
    }


    mainFunc() {
        this.setState({ text: "Sorted", pressed: true })
        setTimeout(() => {
            this.setState({ text: "Sort by Popularity", pressed: false })
        }, 1000)
        this.props.sortByPopularity()
    }


    render() {

        return (
            <div>
                <button onClick={() => {this.mainFunc()}}>{this.state.text}</button>
            </div>
        )
    }

}


export default SortByPopularityBtn