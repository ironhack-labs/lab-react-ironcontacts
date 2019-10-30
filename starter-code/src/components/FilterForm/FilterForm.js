import React, { Component } from 'react';

class FilterForm extends Component {
  state = {
    name: '',
    popularity: '',
  }

  handleChange(e) {
    const { filterFunction } = this.props;
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => {
      filterFunction(this.state);
    })
  }

  render() {
    const { name, popularity } = this.state;
    return (
      <div>
        <input type="text" name="name" placeholder="Filter by name" value={name} onChange={(e) => this.handleChange(e)} />
        <input type="number" name="popularity" placeholder="Filter by popularity" value={popularity} onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
};

export default FilterForm;
