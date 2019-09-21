import React, { Component } from 'react';
import contacts from '../contacts.json'

class CelebList extends Component {

  constructor(props) {
    super(props)

    this.state = {

      // The list of Celebs (Only get 5)
      list: contacts

    }

  }

  initialTableRows = () => {

    // Return a table of the first 5 contacts

    return this.state.list.slice(0, 5).map((eachContact, index) => {

      return (

        <tr>

          <td> <img src={eachContact.pictureUrl} height = "200px" /> </td>
          <td> {eachContact.name} </td>
          <td> {eachContact.popularity} </td>

        </tr>

      )

    })

  }

  render() {

    return (

      <div>

        <table>

          <thead>
            <tr>
              <th colspan="3">The Iron Contacts</th>
            </tr>
          </thead>

          <tr>

            <td> Picture </td>
            <td> Name </td>
            <td> Popularity </td>

          </tr>
          
          {this.initialTableRows()}

        </table>


      </div>

    );

  }

}

export default CelebList;

