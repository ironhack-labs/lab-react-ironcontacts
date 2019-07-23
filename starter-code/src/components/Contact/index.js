import React, { Component } from 'react';

export default class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			pictureUrl: this.props.pictureUrl,
			popularity: this.props.popularity,
			deleteTheContact: this.props.deleteContact.bind(this),
		};
	}
	render() {
		return (
			<li>
				<p>Name: {this.props.name}</p>
				<img src={this.props.pictureUrl} alt={this.props.name} />
				<p>popularity: {this.props.popularity}</p>
				<button onClick={this.state.deleteTheContact}>Delete</button>
			</li>
		);
	}
}
