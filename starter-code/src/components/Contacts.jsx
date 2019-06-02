import React, {Component} from 'react';
import {getFirstFour} from '../contactsList';
import {getAllContacts} from '../contactsList';

class Contacts extends Component {
  state = {
    contacts: getFirstFour(),
    fulllist: getAllContacts(),
    messageSortByName:{status:false,error:''},
    messageSortByPopularity:{status:false,error:''}
  };

    functionDelete =  contact => {
    let contacts = this.state.contacts.filter (c =>  c.name !== contact.name);

     console.log("lista de contatos menos o contato selecionando",contacts)
    this.setState ({contacts});  
  };

    functionAddRandom = () => {
      this.setState({messageSortByPopularity:{status:false}});
      this.setState({messageSortByName:{status:false}});
    const addOne = this.state.fulllist[Math.floor(Math.random()*this.state.fulllist.length)]
    contacts: this.state.contacts.push(addOne)
    this.setState({})
  }

  functionSortName = () => {

     if(this.state.contacts.length > 0 ){

      let contacts = this.state.contacts.sort( (a,b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 :0
    })
      this.setState({contacts})

    }else{
  
       this.setState({messageSortByName:{status:true,error:'SortByName - Não existem itens para essa operação'}});
     }

    }

  functionPopular = () => {

    if(this.state.contacts.length > 0 ){

    let contacts = this.state.contacts.sort((a,b) => {
     return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0
  })

    this.setState({contacts})
      
    }else{

        this.setState({messageSortByPopularity:{status:true,error:'SortByPopularity - Não existem itens para essa operação'}});

}


  }

  render () {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.functionAddRandom} type="button" className="btn btn-dark ">Add random Contact</button>
        <button onClick={this.functionSortName} type="button" className="btn btn-info m-2 ">Sort by name</button>
        <button onClick={this.functionPopular} type="button" className="btn btn-success ">Sort by popularity</button>

        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map ((contact, index) => (
              <tr key={index}>
                <td> <img src={contact.pictureUrl} width="60px" alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => this.functionDelete (contact)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            
          {this.state.messageSortByName.status || this.state.messageSortByPopularity.status  ?
            <div className="alert alert-danger" role="alert">
            <strong>Alerta!</strong> {

               this.state.messageSortByName.status ? 
               this.state.messageSortByName.error:
               this.state.messageSortByPopularity.status? 
               this.state.messageSortByPopularity.error :''
              
              }
           
          </div>
          :''}  
            
      </div>
    );
  }
}

export default Contacts;
