import React from 'react'

const Contacts = (props) => {

    return (
        
        <Table className="striped bordered hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{props.pictureURL}</td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
          </tr>
        </tbody>
      </Table>
    )
}

export default Contacts;