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
    tempArray.sort((a, b) => a.popularity !== b.popularity ? a.popularity > b.popularity ? -1 : 1 : 0);
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


        <table className="uk-table uk-table-justify uk-table-divider">
          <thead className="thead-dark">
            <tr>
              <th className="uk-text-middle">Picture</th>
              <th className="uk-text-middle">  Name</th>
              <th className="uk-text-middle">Popularity</th>
              <th className="uk-text-middle">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.newarray.map((item, index) => {
              return  (
                  <tr key={index}>
                    <td className="uk-text-middle"><img src={item.pictureUrl} width="80px" alt=""/></td>
                    <td className="uk-text-middle">{item.name}</td>
                    <td className="uk-text-middle">{item.popularity}</td>
                    <td className="uk-text-middle"><button className="uk-button uk-button-danger" onClick={()=>{this.deleteContact(index)}}>delete contact</button></td>
                  </tr>
              )
              })
            }
          </tbody>
        </table>
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid-match uk-margin uk-margin-auto uk-child-width-1-3 uk-flex-around uk-flex uk-flex-middle uk-padding-small">
            <div className="text-center">
              <button className="uk-button uk-button-secondary" onClick={this.addContact}>add contact</button>
            </div>
            <div className="text-center">
              <button className="uk-button uk-button-secondary" onClick={this.sortPopularity}>sort by Popularity</button>

            </div>
            <div className="text-center">
              <button className="uk-button uk-button-secondary align-self-center mr-3" onClick={this.sortName}>sort by name</button>
            </div>
            </div>


          </div>
        </div>
      </div>
    )
  }

}

export default Table;