import React from "react";
import "./AddActor.css";



class AddActor extends React.Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef();
        this.state = {
            picture : "",
            name : "",
            popularity : 0,
        }
    }

    handleInputChange = (event) => {
        let {type, name, value} = event.target;
        this.setState({[name]: value});

    }

    handleForSubmit = (event) => {
        event.preventDefault()
        const actorInfo = {
            picture: this.state.picture,
            name: this.state.name,
            popularity: this.state.popularity
        }
        this.props.addActorHandler(actorInfo)

    }



    render(){
        return (
            <div className = "AddActor">
                <h2>Add an actor or actress</h2>
                    <form onSubmit= {this.handleForSubmit}>
                        <label>
                            Picture:
                            <input
                            type= "file" ref={this.fileInput}
                            name="picture"
                            value={this.state.picture}
                            onChange= {this.handleInputChange}
                            >
                            </input>
                        </label>

                        <label>
                            Name:
                            <input
                            type= "text"
                            name="name"
                            value={this.state.name}
                            onChange= {this.handleInputChange}
                            >
                            </input>
                        </label>

                        <label>
                            Popularity:
                            <input
                            type= "number"
                            name="popularity"
                            value={this.state.popularity}
                            max="20"
                            onChange= {this.handleInputChange}
                            >
                            </input>
                        </label>

                        <button>Submit</button>

                    </form>
            </div>

        )
    }

}


export default AddActor