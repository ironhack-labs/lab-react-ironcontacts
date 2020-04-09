import React, {Component} from 'react';
import Table from "../Table/Table";
import contacts from '../../contacts';


class Page extends Component {

  state = {
    people : contacts.slice(0,5)
  };


  addRandomContact = () => {
    const newContact = contacts[this._getRandomNumber(5, contacts.length -1)];
    this.setState({
      people: [...this.state.people, newContact]
    });
  };

  sortByName = () => {
    this.setState({
      people: this.state.people.sort((element,  last) => element.name > last.name)
    })
  };

  sortByPopularity = () => {
    this.setState({
      people: this.state.people.sort((element,  last) => last.popularity - element.popularity)
    })
  };

  removeIndex = (arrayIndex) => {
    const newArray = this.state.people.filter((element, index) => index !== arrayIndex);
    this.setState({
      people: newArray
    })
  };

  _getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <div>
        <header>
          <h1>IronContacts</h1>
        </header>
        <div className='buttons'>
          <button onClick={this.addRandomContact}>Add random contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <Table tableHead={['Image', 'Name', 'Popularity', 'Action']} tableBody={this.state.people} delete={this.removeIndex} />
      </div>
    );
  }
}

export default Page;