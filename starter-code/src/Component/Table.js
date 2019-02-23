import React, {Component} from 'react';
import contacts from '../contacts.json'


class Table extends Component{
  constructor(){
    super();
    this.state= {
      newarray:[]
    }
  }


  componentDidMount() {
    let {newarray}= this.state;
    newarray= contacts.slice(0,5);
    this.setState({newarray})
  }

  addContact = () =>{
    let randomIndex =  Math.floor(Math.random()* Math.floor((contacts.length)));
    let tempArray = this.state.newarray;
    tempArray.push(contacts[randomIndex]);
    this.setState({newarray:tempArray})
  }

  sortName = () => {
    let tempArray = this.state.newarray;
    tempArray.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
    this.setState({newarray: tempArray})

  }
  sortPopularity= () => {
    let tempArray = this.state.newarray;
    tempArray .sort((a, b) => a.popularity !== b.popularity ? a.popularity > b.popularity ? -1 : 1 : 0);
    this.setState({newarray: tempArray})
  }
  deleteContact = (index) => {

    let tempArray = this.state.newarray;
    tempArray.splice(index,1);
    this.setState({newarray: tempArray})
  }
  render() {

    return(
      <div>


        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="text-center">Picture</th>
              <th className="text-center">  Name</th>
              <th className="text-center">Popularity</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.newarray.map((item, index) => {
              return  (
                  <tr key={index}>
                    <td className="text-center"><img src={item.pictureUrl} height="50" alt=""/></td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.popularity}</td>
                    <td className="text-center"><button className="btn btn-danger" onClick={()=>{this.deleteContact(index)}}>delete contact</button></td>
                  </tr>
              )
              })
            }
          </tbody>
        </table>
        <div className="container-fluid   ">
          <div className="row">
            <div className="col-sm-4   text-center">
              <button className="btn btn-dark " onClick={this.addContact}>add contact</button>
            </div>
            <div className="col-sm-4   text-center">
              <button className="btn btn-dark" onClick={this.sortPopularity}>sort by Popularity</button>

            </div>
            <div className="col-sm-4   text-center">
              <button className="btn btn-dark align-self-center mr-3" onClick={this.sortName}>sort by name</button>

            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default Table;