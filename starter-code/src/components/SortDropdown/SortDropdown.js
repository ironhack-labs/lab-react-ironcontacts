import React, { Component } from 'react'

export default class SortDropdown extends Component {
  render() {
    return (
      <div className="sort-dropdown">
        <span>Sort by {this.props.sortBy}</span>
        {this.props.children}
      </div>
    )
  }
}
