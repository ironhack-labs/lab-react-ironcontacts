import React, { Component } from "react";
import TableBody from './TableBody';
import TableHead from './TableHead';

class Artists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, pictureUrl, popularity } = this.props;
    return (
      <div>
        <TableHead artistArray={this.props.artistArray} />
        <TableBody artistArray={this.props.artistArray} clickToDelete={this.props.clickToDelete}/>
      </div>
    );
  }
}

export default Artists;
