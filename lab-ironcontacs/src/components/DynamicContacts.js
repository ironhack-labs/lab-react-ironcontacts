import {Component} from 'react'
import ContactsCard from './ContactsCard'
import fullContacts from '../contacts.json'

class DynamicContacts extends Component{

constructor(){
    super()
    this.state = {
        contacts:fullContacts
    }
}

selectRandom = () => { //Me falla algo aquí Teo, y no sé bien el qué 
const contactsCopy = [...this.state.fullContacts.slice(0,5)] 
const randomContact = contactsCopy.splice(Math.floor(Math.random() * fullContacts.length))
    
const newArray = [...this.state.contacts]
newArray.push(randomContact)
this.setState({ contacts: newArray})
}

sortByName=()=>{
const newArray=[...this.state.contacts]
newArray.sort((a,b)=>{
    if (a.name <b.name){
        return -1
    }else if(a.name > b.name) {
    return 1
    }else{
        return 0
    }
})
this.setState({contacts:newArray})
}

sortByPopularity = ()=>{
const newArray=[...this.state.contacts]   
newArray.sort((a,b)=>b.popularity - a.popularity) 
this.setState({contacts:newArray})
}

deleteContact =(contactId) =>{
    this.setState({contacts:this.state.contacts.filter(elm=>elm._id !==contactId)})
}


render(){
    return(
<>
<section className="buttons">
<button onClick={this.selectRandom}>New Random </button>
<button onClick={this.sortByName}>Sort by name </button>
<button onClick={this.sortByPopularity}>Sort by popularity </button>
<table>
{/* {contacts.map(elm => <ContactCard {...elm} removeContact={() => this.deleteContact(elm._id)} key={elm._id} />)}
<button onClick={this.deleteContact}>Delete contacts </button> */}
</table>

</section>
{this.state.contacts.slice(0,5).map((elm)=><ContactsCard {...elm}/>)}
</>
)
}
}

export default DynamicContacts