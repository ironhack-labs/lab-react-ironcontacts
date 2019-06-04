import React, { Component } from 'react'
import contacts from '../contacts.json'
import Card from '../components/Card'
// import '../Table.css';
class Table extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contacts
    }

  }

  casa = [...contacts]

  casina = this.casa.slice(0, 5)

  addRandom = () => {
    this.casina.push(this.casa[Math.floor(Math.random() * (this.casa.length))])
    this.setState({
      contacts: this.casina
    })
  }

  sortName = () => {
    this.casina.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      contacts: this.casina
    })
  }

  sortPopularity = () => {
    this.casina.sort(function sortNumber(a, b) {
      return a.popularity - b.popularity;
    })
    this.setState({
      contacts: this.casina
    })
  }

  deleteActor = (el) => {
    console.log("You're trying to delete.." + el)
    this.casina.splice(el, 1);
    this.setState({
      contacts: this.casina
    })
  }

  render() {
    return (
      <section>
        <h1>Super table</h1>
        <div className="btnContainer">

          <button onClick={() => this.addRandom()}>Add a random one!</button>
          <button onClick={() => this.sortName()}>Sort by Name</button>
          <button onClick={() => this.sortPopularity()}>Sort by Popularity</button>
        </div>
        <ul >
          <li className="actorLi">
            <ul className="innerUl titleUl">
              <li></li>
              <li><h2>Name</h2></li>
              <li><h2>Popularity</h2></li>
              <li></li>
            </ul>
          </li>

          {
            this.casina.map((el, idx) => {
              return <Card key={idx} actorName={el.name} actorImg={el.pictureUrl} actorPopularity={el.popularity} removeActor={() => this.deleteActor(idx)} />
            })
          }


        </ul>
      </section>



    )
  }
}

export default Table