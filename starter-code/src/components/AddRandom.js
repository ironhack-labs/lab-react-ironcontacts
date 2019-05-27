import React from 'react';

class AddRandom extends React.Component {
  render() {
    return (
      <button 
        type="button" 
        className="btn btn-primary"
        onClick={ this.props.onAddRandom }>
          Add Random Contact
      </button>
    )
  }
}

export default AddRandom