import React, { Component } from 'react';

import './style.scss';

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.deleteCelebrity = this.deleteCelebrity.bind(this);
  }

  deleteCelebrity() {}

  render() {
    return (
      <li className="celebrityCard">
        <div className="celebrityLine animated fadeInLeft">
          <div>
            <img src={this.props.picture}></img>
          </div>
          <div>
            <p>
              {this.props.name}
              <br />
              <small>popularity: {this.props.popularity.toFixed(2)}</small>
            </p>
          </div>
          <div>
            <button onClick={this.deleteCelebrity}>Delete</button>
          </div>
        </div>
      </li>
    );
  }
}

export default Celebrity;
