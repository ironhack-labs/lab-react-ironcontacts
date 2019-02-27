import React, { Component } from 'react';

import './App.css';
import Contact from './components/Contact'
import contacts from './contacts.json'
//import {filterContacts} from './services/poepleFilter'


class App extends Component {
  state={
    fetched: true,
    people:[]
  }

  componentDidMount(){
    let people = contacts.slice(0,5)
    this.setState({people})
  }

  render() {
    
    let { fetched, people } = this.state
    console.log(people)

    return (
      <div>
        { fetched && people.map((el,index) => <Contact key={index} {...el} /> )}
      </div>
    );
  }
}

export default App;
