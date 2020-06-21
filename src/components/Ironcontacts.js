import React, { Component } from 'react';
import contacts from '../contacts.json';
import User from '../components/User';
class App extends Component{


constructor (props){
        super(props)      
        this.state = {
            contacts:contacts.slice(0,5)
        }
}

addRandom =()=>{
        let random = contacts[Math.floor(Math.random()*contacts.length)];
        let thisContacts = [...this.state.contacts];
        thisContacts.push(random);
        this.setState({
            contacts:thisContacts
        })
}

sortByName=()=>{
    
        let myData = [...this.state.contacts]
        .sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        })
         this.setState({
             contacts:myData
    })

}

sortPopularity = ()=>{
    let myData = [...this.state.contacts]  
    .sort((a, b) =>  {
        if(a.popularity < b.popularity) {return -1}
       else if(a.popularity > b.popularity) {return 1}      
    });

    this.setState({
        contacts: myData
})

}

deleteMovieHandler = (movieIndex) => {
    const deleteIron= [...this.state.contacts];
    deleteIron.splice(movieIndex,1);
    this.setState({
        contacts:deleteIron
    })
}


render(){
    return(
<div>
<button onClick = {this.addRandom}>Add Random contact</button>
<button onClick ={this.sortByName}>Sort by Name</button>
<button onClick = {this.sortPopularity}>Sort by Popularity</button>
    <table>
        <tr>
        <td>Picture</td>
        <td>Name</td>
        <td>Popularity</td>
    </tr>
    <tbody>
          {
    this.state.contacts.map((show,index)=>(
     <User              
                    Key={index}
                    picture = {show.pictureUrl}
                    name= {show.name}
                    popularity = {show.popularity}
                    clickToDelete={()=>this.deleteMovieHandler(index)}
     />

    ))
    }</tbody>

     </table>
</div>
    )}
}

export default App;