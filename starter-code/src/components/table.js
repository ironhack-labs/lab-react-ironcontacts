import React, { Component } from 'react';

class Table extends Component {

  constructor(props){
      super(props);
       this.state={
       data:this.props.info,
       myclick:this.deletecontact

     }

     

  }

  deletecontact = (a) => {
    console.log(a);
  }

  render() {
   
    return (

     <div>
        <table>
         
            <thead>
      <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {
        this.state.data.map((item, i) => {
        return <tr key={i}><td>{item.name}</td>
        <td>{item.popularity}</td>
        <td><img width="50" height="50" src={item.pictureUrl}></img></td>
        <td><button onClick={this.deletecontact(i)}>Delete</button></td>
       </tr>
      })
    }
    </tbody>
     </table>
    </div>
     
    );
  }
}

export default Table;




