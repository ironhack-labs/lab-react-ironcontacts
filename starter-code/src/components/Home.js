import React, {Component} from 'react';
import contacts from '../contacts.json'
import Item     from './Item';
import Button   from './Button';

class Home extends Component {
  state = {
    arr: []
  }

  componentWillMount() {
    let [...firstFive] = contacts;

    firstFive.length = 5;
    this.setState({arr:firstFive});
  }

  getRandom = () => {
    let {arr} = this.state,
        index = Math.floor((Math.random() * 199 ) + 5);

    arr.push(contacts[index]);
    this.setState({arr});
  }

  sortByName = () => {
    let {arr}    = this.state,
        sortName = arr.sort( (a,b) => (a.name < b.name) ? -1 : 1 );
    
    this.setState({arr: sortName});
  }

  sortByPopularity = () => {
    let {arr}          = this.state,
        sortPopularity = arr.sort( (a,b) => b.popularity - a.popularity );
    
    this.setState({arr: sortPopularity});
  }

  deleteContact = index => {
    let {arr} = this.state;

    arr = arr.filter( (item, inx) => index !== inx);
    this.setState({arr});
  }

  render() {
    const {state} = this;

    return (
      <div className="container">
        <h1>IronContacts</h1>
        <section>
          <Button onClick={this.getRandom}>+ Add Random</Button>
          <Button onClick={this.sortByName}>∨ Sort by name</Button>
          <Button onClick={this.sortByPopularity}>∧ Sort by popularity</Button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
            </tr>
            {state.arr.map( (item, index) => <Item key={index} index={index} item={item} onClick={this.deleteContact} /> )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;