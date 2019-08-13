import React, {Component} from 'react'
import Container from './Container'
import Contacts from '../contacts.json'
 class ContactsList extends Component{
constructor(){
super();
   const array = [Contacts[0], Contacts[1], Contacts[2], Contacts[3], Contacts[4],]
    this.state = {
        contacts: array }

}
     deleteOne = idx => {

         let contactsCopy = [...this.state.contacts]
         contactsCopy.splice(idx, 1)

         this.setState({
             contacts: contactsCopy
         })
     }

     addRandom = e =>{
         let x = Math.floor(Math.random() * Contacts.length);

         let contactsCopy = [...this.state.contacts]
         contactsCopy.push(Contacts[x])   
         this.setState({
             contacts: contactsCopy
         })
        
        }
     sortName = e => {
         let contactsCopy = [...this.state.contacts]
         contactsCopy.sort(function (a, b) {
             let x = a.name
             let y = b.name
             if (x < y) { return -1; }
             if (x > y) { return 1; }
             return 0;
         });
         
         this.setState({
             contacts: contactsCopy
         })

     }
     sortPopularity = e => {
         let contactsCopy = [...this.state.contacts]
         contactsCopy.sort(function (a, b) { return a.popularity - b.popularity });
         contactsCopy.reverse()
         this.setState({
             contacts: contactsCopy
         })

     }
         
     
     
render(){
    
return(
     <div className="container">
         
         <h1>IronContacs</h1>
            <div className="row">

            <button className="col-md-4 lista " onClick={this.sortName}>Sort by name</button>
            <button className="col-md-4 lista" onClick={this.addRandom}>Add Random</button>

            <button className="col-md-4 lista" onClick={this.sortPopularity}>Sort by popularity</button>


            </div>
                
                <div className="row">
                    <div className="col-md-3 lista">
                        <li><h4>Picture</h4></li>
                    </div>

                    <div className="col-md-3 lista">
                        <li><h4>Name</h4></li>
                    </div>

                    <div className="col-md-3 lista">
                        <li><h4>Popularity</h4></li>
                    </div>

                    <div className="col-md-3 lista">
                        <li><h4>Action</h4></li>
                    </div>
                </div>
           
            
         
        {/* <Navbar deleteC={() => this.llamame()}/> */}
        {this.state.contacts.map((elm,idx)=>{

            
            
            return <Container key={idx} {...elm} deleteC={() => this.deleteOne(idx)}/>
            

         })

            
         }
            
    </div>
    
    
     
)
}
    
}

 export default ContactsList;