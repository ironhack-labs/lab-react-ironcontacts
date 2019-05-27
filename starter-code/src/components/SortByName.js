import React from 'react';

class SortByName extends React.Component {
  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary"
        onClick={ this.props.onSortByName }>
          Sort by name
      </button>
    )
  }
}

export default SortByName