import React, {
  Component
} from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  state = {
    celebs: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  render() {
    return ( <
      div className = "App" >
      <
      h1 > IronContacts < /h1> <
      table >
      <
      thead >
      <
      tr >
      <
      th > Picture < /th> <
      th > Name < /th> <
      th > Popularity < /th> <
      /tr> <
      /thead> <
      tbody > {
        this.state.celebs.map((celeb) => {
          return ( <
            tr key = {
              celeb.id
            } >
            <
            td > < img src = {
              celeb.pictureUrl
            }
            alt = {
              celeb.name
            }
            /> </td >
            <
            td > {
              celeb.name
            } < /td> <
            td > {
              celeb.popularity
            } < /td> <
            /tr>
          )
        })
      } <
      /tbody> <
      /table>

      <
      /div>
    );
  }
}

export default App;