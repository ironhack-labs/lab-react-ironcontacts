import React, { Component } from 'react';

class Artist extends Component {
	state = {
		name: this.props.name,
		picture: this.props.picture,
		popularity: this.props.popularity
	};

	render() {
		return (
			<tr>
				<th>
					<img src={this.state.picture} />
				</th>
				<th>{this.state.name}</th>
				<th>{this.state.popularity}</th>
			</tr>
		);
	}
}

export default Artist;
