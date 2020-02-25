import React from "react";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <img width="200" src={this.props.picture} alt="" />
                <h1>{this.props.name}</h1>
                <h2>{this.props.popularity}</h2>
            </div>
        );
    }
}