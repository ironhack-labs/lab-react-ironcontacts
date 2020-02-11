import React, { Component } from 'react';

class Actors extends Component {


    addUrl = (actorIndex) => {

        let url = this.props.actorProps[actorIndex].pictureUrl
        return String(url)
        
    }

    addRow = (actorIndex) => {
        return (
        <tr>
            <td><img src={this.addUrl(actorIndex)} alt="" height={100}></img></td>
            <td>{this.props.actorProps[actorIndex].name}</td>
            <td>{this.props.actorProps[actorIndex].popularity.toFixed(2)}</td>
        </tr>
        
        )
    }

    moreRows = (rowNumber) => {
        let rows = [];
        for (let i=0;i<rowNumber;i++){
            rows.push(this.addRow(i))
        }
        return rows
    }
        
    render() {
        return (
            <div>
                <h1>Ironhack Contacts</h1>
                <button onClick={this.props.randomProp}>Add People</button>
                <button onClick={this.props.sortNameProp}>Sort by Name</button>
                <button onClick={this.props.sortPopProp}>Sort by Popularity</button>
                <table className="fullTable">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.moreRows(this.props.actorProps.length)}
                        </tbody>
                </table>
                
            </div>
        );
    }
}

export default Actors;

        