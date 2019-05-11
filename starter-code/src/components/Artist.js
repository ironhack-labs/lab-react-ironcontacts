import React, { Component } from 'react';

class Artist extends Component {
	render() {
		return (
			<tr>
				<th>
					<img src={this.props.picture} height="150" />
				</th>
				<th>{this.props.name}</th>
				<th>{this.props.popularity}</th>
			</tr>
		);
	}
}

export default Artist;
