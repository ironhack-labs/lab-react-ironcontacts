import React, {Component} from 'react'
import Contact from './Contact'
import contacts from '../contacts.json'
var cinco = []
class Lista extends Component{
    state = {
        contact:contacts.slice(0,5)
    }

    // primeros = ()=>{
    //     const cinco = []
    //     for(let i=0;i<5;i++){
    //         cinco.push(this.state.contact[i])
    //     }
    //     this.setState({
    //         contact:cinco
    //     })
    // }
    // primeros()
    randomContact = () => {
        const random = Math.floor(Math.random()*contacts.length)
        const randomCopy = this.state.contact;
        
        randomCopy.push(contacts[random]);
        this.setState({
            contact: randomCopy
        })
      }
      sortbypopularity = () => {
        
        const sortCopy = this.state.contact;
        
        sortCopy.sort(function(a,b){
            var keyA = a.popularity
        var keyB = b.popularity
    
    if(keyA > keyB) return -1;
    if(keyA < keyB) return 1;
    return 0;
        });
        this.setState({
            contact: sortCopy
        })
      }
      sortbyname = () => {
        
        const sortNameCopy = this.state.contact;
        
        sortNameCopy.sort(function(a,b){
            var keyA = a.name
        var keyB = b.name
    
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
        });
        this.setState({
            contact: sortNameCopy
        })
      }
      deleteContact = (index) => {
        const deleteCopy = this.state.contact;
        deleteCopy.splice(index, 1);
        this.setState({
            contact: deleteCopy
        })
      }
    
     
   
    
    render(){
        const { contact } = this.state;
       
        return (<div>
   
        <table>
            <tr>
            <th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th>
            </tr>
            <tr>
                <td><button onClick={this.randomContact}>Add random</button></td>
                <td><button onClick={this.sortbyname}>Sort by name</button></td>
                <td><button onClick={this.sortbypopularity}>Sort by popularity</button></td>
            </tr>
        {contact.map((items,key)=><Contact key={key} {...items} clickToDelete={() => this.deleteContact(key)}/>)}
        </table>
        </div>
        
        );
    }
}

export default Lista;