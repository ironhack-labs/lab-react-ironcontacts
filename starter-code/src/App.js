import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactsDisplay from './components/contacts-display-component/contacts-display';
import Message from './components/message-component/message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: contacts,
      random:{randomNo:-1,randomFlag:false},
      sortName:{sortFlag:false},
      sortPop:{sortFlag:false},
      show: false,
      coverGray: {'display':'none'},
      deleteFlag: false
    }
}
setDeleteFlag = (del) => {
  console.log(del)
  this.setState({
    deleteFlag: del
  })
  
}
changeShow = () => {
    this.setState({show:!this.state.show})
    console.log(this.state.show)
    if(!this.state.show){
      this.setState({
        coverGray: {'display':'block'}
      })
    } else {
      this.setState({
        coverGray: {'display':'none'}
      })
    }
}
  addContact = () => {
    let random = Math.floor(Math.random()* this.state.contactList.length)
    if(random > 5) {
       this.setState({
        sortName:{sortFlag:false},
        sortPop:{sortFlag:false},
         random:{randomNo:random,randomFlag:true}
       })
    }
  }
  sortName = () => {
    this.setState({
      random:{randomNo:-1,randomFlag:false},
      sortName:{sortFlag:true},
      sortPop:{sortFlag:false},
    })
  }
  sortPopularity = () => {
    this.setState({
      random:{randomNo:-1,randomFlag:false},
      sortName:{sortFlag:false},
      sortPop:{sortFlag:true},
    })
  }
  render() {

    return (
      <div>
     
      <Message setDeleteFlag = {this.setDeleteFlag} show={this.state.show} changeShow={this.changeShow} />

      <div className="content">
      <header>
      <h1>IronContacts</h1>
        <div className="operations">
          <button onClick={this.addContact}><strong>Add Random Contact</strong></button>
          <button onClick={this.sortName}><strong>Sort By Name</strong></button>
          <button onClick={this.sortPopularity}><strong>Sort By Popularity</strong></button>
        </div>
      </header>
       
        
        <br/>
        <div className="table-content">
        <table>
        <thead>
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody >
          <ContactsDisplay 
          sortName = {this.state.sortName} 
          sortPop = {this.state.sortPop}
          rand = {this.state.random}
          changeShow={this.changeShow}
          deleteFlag = {this.state.deleteFlag}
          />
          </tbody>
        </table>
        </div>
      </div>
        <div id="overlay" style={this.state.coverGray}></div>
        
      </div>
    );
  }
}

export default App;
