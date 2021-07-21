
import './App.css';
import contacts from "./contacts.json";
import Cards from "./componentes/Card.js"
import { Component } from "react";

class listen extends Component {

  state = {
    status: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addCard = () => {
    let random = Math.floor(Math.random() * contacts.length);
    let actor = contacts[random];

    while (this.state.status.length < contacts.length && this.state.status.indexOf(actor) >= 0) {
      random = Math.floor(Math.random() * contacts.length);
      actor = contacts[random];

    }
    if (this.state.status.length < contacts.length) {
      this.setState({ status: [...this.state.status, actor] })
    }
  }

  sortName = () => {
    let copyArr = [...this.state.status]

    let sortName = copyArr.sort((a, b) => a.name.localeCompare(b.name))


    this.setState({
      status: sortName
    })
  }

  sortPopularity = () => {

    const copyArr = [...this.state.status]
    const sortPopularity = copyArr.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      status: sortPopularity
    })
  }


handleDeleteCard = (id) => {
  const newActor = [...this.state.status];
  const index = newActor.findIndex((actor) => actor.id === id);
  newActor.splice(index, 1);
  this.setState({
    status: newActor,
  });
};

render() {
  const actors = this.state.status


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className='bt' onClick={this.addCard}>Add Random Contact</button>
      <button className='bt' onClick={this.sortName}> sort by Name</button>
      <button className='bt' onClick={this.sortPopularity}>sort by popularity</button>
      <div className="App1">
        <table className="table-center" >
          <tr className="tr-fixo">
            <th> Picture</th>
            <th> Name</th>
            <th> Popularity</th>
            <th> Remove</th>
          </tr>

          {actors.map(item => {
            return <Cards deleteCard={this.handleDeleteCard} key={item.id} id={item.id} name={item.name} pictureUrl={item.pictureUrl} popularity={item.popularity} />
          })}


        </table>
      </div>
    </div >
  )
}
}

export default listen;
