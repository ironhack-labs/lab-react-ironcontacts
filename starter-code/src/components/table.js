import React, { Component } from 'react';

class Table extends Component {

  constructor(props){
      super(props);
       this.state={
       data:this.props.info
     }
  }

  updateContacts = (temp) => {
    this.setState({
       data:temp
    });
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
         //   this.props.info.map((item, i) => {
         // if using props line above then you dont have to call  this.tableRef.current.updateContacts(temp) in parent
         
          this.state.data.map((item, i) => {
            return <tr key={i}><td>{item.name}</td>
        <td>{item.popularity}</td>
        <td><img width="50" height="50" src={item.pictureUrl}></img></td>
        <td><button onClick={  () => this.props.aMethod(i)  } >Delete</button></td>
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




