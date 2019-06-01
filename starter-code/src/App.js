import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import contacts from './contacts.json'
import ListContacts from './component/ListContacts';
import ButtonActions from './component/ButtonAction';

class App extends React.Component {

  state = {
    choosenContacts : contacts.slice(0, 5),
    estado: false
  }

  addContact = () => {
    const ramdonContact = contacts.slice(this.state.choosenContacts.length, this.state.choosenContacts.length+1)[0]
    this.setState({
      choosenContacts: [...this.state.choosenContacts, ramdonContact],
      estado:true,
    })
    console.log(this.state.choosenContacts)
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">IronContacts</h1>
          </div>
        </div>
        {this.state.estado ? <p>hola</p> : null }
        <ButtonActions addContact={this.addContact}/>

        <ListContacts choosenContacts={this.state.choosenContacts}/>
      </div>
    );
  }
}

export default App;
 
