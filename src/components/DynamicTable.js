import React, {Component} from 'react';
import contacts from '../contacts.json';
import '../App.css';

class DynamicTable extends Component{
    state = {
        contacts: contacts.splice(0,5)
    }
    
   
    addRandom(){
      
        let randomContact = contacts[Math.floor(Math.random()*contacts.length)]
       
       this.setState({contacts: [...this.state.contacts, randomContact]}) //
       
    }

    sortByName(){
        
        this.setState({contacts: this.state.contacts.sort((a, b) => { 
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          
        })})     
    }

    sortByPopularity(){
        this.setState({contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)})
    }

    deleteGrid(index){
        let newContacts = [...this.state.contacts]

        console.log(newContacts.splice(index,1))
        
         this.setState({contacts: newContacts}) 
    }

    renderTableData() {
       return this.state.contacts.map((contact, index) => {
       const { id, name, pictureUrl, popularity } = contact //destructuring
       return (
           <tr key={id}>
               <td> <img className="fotopeque"src={pictureUrl} alt=""/></td>
               <td>{name}</td>
               <td>{popularity}</td>
               <td><button onClick={()=>this.deleteGrid(index)}>Delete me</button></td>
           </tr>
       )
       })
    }
   
   
    
    render() {
      
       return (
       <>
       <h1 id='title'>IronContacts</h1>
       <button onClick={()=>this.addRandom()}>Add a random Contact</button>
       <button onClick={()=>this.sortByName()}>Sort By Name</button>
       <button onClick={()=>this.sortByPopularity()}>Sort By Popularity</button>
       <table id='students'>
           <thead>
               <tr>
                   <th>Picture</th>
                   <th>Name</th>
                   <th>Popularity</th>
               </tr> 
           </thead>
           <tbody>
                {this.renderTableData()}
           </tbody>
       </table>
         
       </>
       )
    }
}


export default DynamicTable