import React, { Component } from "react";

class TableHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, pictureUrl, popularity } = this.props;
    return (
      <div>
        <div class='table_container'>
          <div class='table_titles'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </div>
        </div>
      </div>
    );
  }
}

export default TableHead;