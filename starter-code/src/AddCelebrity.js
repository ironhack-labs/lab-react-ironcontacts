import React, { Component } from 'react';



class AddCelebrity extends Component {

    state = {
        name: '',
        popularity: ''
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onNewCelebrity(this.state.name, this.state.popularity)
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    changePopularity = (event) => {
        this.setState({
            popularity: event.target.value
        })
    }

    // changeHandler = (event) => {
    //     const inputName = event.target.name
    //     this.setState({
    //         [inputName]: event.target.value
    //     })
    // }
    render() {



        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <p>Add an actress/actor:</p>
                    <input name="name" placeholder="name"
                        onChange={this.changeName}
                        value={this.state.name}></input>
                    <input name="popularity" placeholder="popularity"
                        onChange={this.changePopularity}
                        value={this.state.popularity}></input>
                    <button type="submit">SUBMIT</button>
                </form>
            </div >
        );
    }
}

export default AddCelebrity;
