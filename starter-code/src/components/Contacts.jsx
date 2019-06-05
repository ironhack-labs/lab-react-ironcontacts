import React, {Component} from 'react';
import Button from './Button';
import {getFirstFour} from '../contactsList';
import {getAllContacts} from '../contactsList';
import ContactLine from './ContactLine';
import TableHeader from './TableHeader'
import Loading from './Loading'
import Header from './Header'

class Contacts extends Component {
  state = {
    loaded:false,
    contacts:[],
    fulllist: getAllContacts(),
    messageSortByName:{status:false,error:''},
    messageSortByPopularity:{status:false,error:''}
  };

    functionDelete =  contact => {
    let contacts = this.state.contacts.filter (c =>  c.name !== contact.name);
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

  componentWillMount(){
    setTimeout(()=>{
       this.setState({
        contacts: getFirstFour(),loaded:true
      })
    },2000)
  }
  render () {
    return (
      <div>
        <Header actionHeader={[this.functionAddRandom,this.functionSortName,this.functionPopular]}/>
          {this.state.loaded
          ?(

        <table className="table">
         <TableHeader/>
          <ContactLine infoLine={this.state.contacts} actionFunction={this.functionDelete}/>
        </table>
          ) :
           (<Loading/>)
          }

            
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
