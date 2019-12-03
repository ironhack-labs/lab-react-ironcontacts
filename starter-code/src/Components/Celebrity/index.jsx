import React, { Component } from 'react';

import './style.scss';

class Celebrity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="celebrityInfo animated fadeInDown">
        <div>
          <img src={this.props.picture}></img>
        </div>
        <p>
          {this.props.name}
          <br />
          <small>popularity: {this.props.popularity.toFixed(2)}</small>
        </p>
      </div>
    );
  }
}

export default Celebrity;
