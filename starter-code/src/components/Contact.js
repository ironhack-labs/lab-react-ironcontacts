import React from 'react'

class Contact extends React.Component {

  render() {

    const { contact } = this.props
    console.log(this.props)

    return (
      <table className="table responsive">
        <tr>
          <th>Picture
          <td><img src={contact.pictureUrl} className="card-img-top"/></td>
          </th>
          <th>Name
            <td>{contact.name}</td>
          </th>
          <th>Popularity
          <td>{contact.popularity}</td>
          </th>
        </tr>
      </table>
    );
  }
}

export default Contact
