import React, {
Component
} from 'react';
import allContacts from '../getAllContacts'
import firstFive from '../getFirstFive'
import Tab from './Tab'
import Buttons from './Buttons'

class Containeer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      contacts: firstFive(),
      list: allContacts(),
    }
    this.newContact = this.newContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  newContact() {
    const list = this.state.list;
    const contacts = this.state.contacts;
    let randomizer = 0;
    do {
      randomizer = parseInt(Math.random() * list.length);
    } while (contacts.includes(list[randomizer])===true)
    contacts.push(list[randomizer]);
    this.setState ({contacts: contacts});
  }

  sortByName() {
    const contacts = this.state.contacts;
    let sortName = contacts.sort(function (a, b){
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({contacts:sortName})
  }

  sortByPopularity(){
    const contacts = this.state.contacts;
    let sortPopularity = contacts.sort(function (a, b){
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({contacts:sortPopularity})
  }

  deleteItem(name){
    const contacts = this.state.contacts;
    const filterItems = contacts.filter((element) => {
      return element.name != name
    });
    this.setState({contacts:filterItems})
  }

  render() {
    
    return ( 
      <div>
        <div className="row linha">
          <Buttons functionClick={this.newContact}>Add Random Contact</Buttons>
          <Buttons functionClick={this.sortByName}>Sort by Name</Buttons>
          <Buttons functionClick={this.sortByPopularity}>Sort by Popularity</Buttons>
        </div>
        <div className="table-responsive">
          <table className="table">
              <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {this.state.contacts.map(element =><Tab inf={element} functionClick={this.deleteItem} />)}
              </tbody>
            </table>
          </div>
        </div>
      ) 
    } 
  } 

export default Containeer;