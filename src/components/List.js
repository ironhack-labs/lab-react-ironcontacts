import React from 'react';
import Row from './Row'

class List extends React.Component{
  render(){
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
      {this.props.contacts.map((contact, i)=>{
        return <Row  key={i} id={i} contact={contact} onDelete={this.props.onDelete}/>
      })}
      </tbody>
    </table>)
  }
}

export default List;
