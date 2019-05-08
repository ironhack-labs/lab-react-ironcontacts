import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Row from './components/ramdonCel';
import Button from './components/Button';


class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList: contacts.slice(0, 5)
    }
  this.addRamdon = this.addRamdon.bind(this);
  this.sortList = this.sortList.bind(this);
  this.sortNumber = this.sortNumber.bind(this);
  this.deleteCelebrity = this.deleteCelebrity.bind(this);
  } 
  
    addRamdon() {
      let ramdon = contacts[(Math.floor(Math.random() * contacts.length))];
      let coverList = [...this.state.contactList];
      if (!coverList.includes(ramdon)){
        coverList.push(ramdon);
        this.setState({
          contactList: coverList,
        });
      } else {
        this.addRamdon();
      }
    }
    
    sortList() {
      let sortedList = [...this.state.contactList];
      sortedList.sort((a, b) => { 
        if (a.name < b.name) {
          return - 1;
        }
      })
      this.setState({
        contactList: sortedList,
      })
    }

    sortNumber() {
      let sortNumberList = [...this.state.contactList];
      sortNumberList.sort((a, b) => b.popularity - a.popularity)
      this.setState({
        contactList: sortNumberList,
      })
    }    

    deleteCelebrity(idx) {
      const delCelb = [...this.state.contactList];
      delCelb.splice(idx, 1);
      this.setState({
        contactList: delCelb,
      })
    }
    
    render() { 
      return (
        <div className="App">
        <h1>IronContacts</h1>
          <table>
          <tr>
            <th> Pictures</th>
            <th> Name</th>
            <th> Popularity</th>
          </tr>
        <Button name="Add Random Contact" onClick={this.addRamdon}/>
        <Button name="Sort Name" onClick={this.sortList} />
        <Button name="Sort Popularity" onClick={this.sortNumber} />        
        {this.state.contactList.map((e, idx) => {
          return  <Row deleteCelebrity={this.deleteCelebrity} data={e} key={idx}/> 
        })}
       </table>
      </div>
    );
  }
}

export default App;
