import React from 'react'
import './App.css';

class AddContacts extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            popularity: ""
        }
    }

    doSmthGeneric = (event) => {
        const nameOfInput = event.target.name;
        this.setState({
            [nameOfInput]: event.target.value,
        })
    }   

    doFormSubmit = (event) => {
        event.preventDefault();

        const actorContact = {
            name: this.state.name,
            popularity: this.state.popularity,
        }

        this.props.refCreate(actorContact)

        this.setState({
            name: "",
            popularity: "",
        })
    }

    render(){
        return(
            <>
                <h2>Add Contact</h2>

                <form onSubmit={this.doFormSubmit}>
                    <label>
                        Name:
                        <input type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.doSmthGeneric}
                        />
                    </label>
                    <label>
                        Popularity:
                        <input type="number" 
                        name="popularity" 
                        max = '10'
                        min = '0'
                        value={this.state.popularity} 
                        onChange={this.doSmthGeneric}
                        />
                    </label>
                    <button>Submit</button>

                </form>

            </>

        )

    }

}




export default AddContacts