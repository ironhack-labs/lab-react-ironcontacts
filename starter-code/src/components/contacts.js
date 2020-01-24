import React, { Component } from 'react'


const imgstyle1 = {

    color: "black",
    backgroundColor: "white",
    padding: "5px",
    fontFamily: "Arial",
    border: "2px solid black",
    width: "100px",
    height: "auto",
    margin: "10px 400px 2px 10px"
};



export default class Contacts extends Component {
    render() {
        let myPopul = Math.round(this.props.popularity * 100) / 100;
        return (

            <tr>
                <td><img style={imgstyle1} src={this.props.pictureUrl} alt="Bild" /></td>
                <td>{this.props.name}</td>
                <td>{myPopul}</td>
                <td><button onClick={this.props.clickToDelete}>Delete</button></td>
            </tr>
        )
    }
}


