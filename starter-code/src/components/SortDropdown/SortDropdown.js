import React, { Component } from 'react'
import './SortDropdown.css'

export default class SortDropdown extends Component {
  render() {
    return (
      <div className="sort-dropdown">
        <div className="options">
          Sort by {this.props.sortBy}
          <div className="sort-dropdown-options">
            {this.props.children}
          </div>
        </div>
        
      </div>
    )
  }
}
