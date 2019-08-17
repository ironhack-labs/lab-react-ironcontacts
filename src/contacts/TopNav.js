'use strict';

import * as React from "react";

/**
 * Created by David on 17/08/2019.
 */

class TopNav extends React.Component {

	render() {
		return <div>
			<h1>IronContacts</h1>
			<div className="btn-group">
				<button className="btn btn-default">Add Random Contact</button>
				<button className="btn btn-default">Sort by name</button>
				<button className="btn btn-default">Sort by populaity</button>
			</div>

		</div>
	}
}

export default TopNav;
