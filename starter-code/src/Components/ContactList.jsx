import React from 'react';
import contacts from '../contacts.json';

let firstFive = []
for(let i = 0; i < 5; i++){
  firstFive.push(contacts[i]);
}

class ContactList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            list: firstFive,
            counter: 5
        }
    }

    displayContacts = () =>{
        return this.state.list.map((eachContact, index) => {   
                return (
                    <div key={index} style={{
                        border: "1px solid black",
                        borderRadius: "4px",
                        width: "65%",
                        margin: "10px",
                        padding: "5px"
                        }}>
                        <div className="contactEle">
                            <div>Picture</div>
                            <img src={eachContact.pictureUrl} width="70px" height="100px"></img>
                        </div>
                        <div className="contactEle">
                            <div>Name</div>
                            <div>{eachContact.name}</div>
                        </div>
                        <div className="contactEle">
                            <div>Popularity</div>
                            <div>{eachContact.popularity}</div>
                        </div>
                        <button onClick= { () => {
                             this.deleteContact(index)
                        }
                       }>Delete</button> 
                    </div>
                )
        })
    }


    addNewContact = () => {
        let newList = [...this.state.list];
        let newContact = contacts[Math.floor(Math.random() * contacts.length)];

        if(newList.indexOf(newContact) < 0){
            newList.push(newContact);
        }else{
            this.addNewContact()
        }
        this.setState({
            list: newList
        })
    }


    sortByName = () => {
        let sortedList = [...this.state.list];
        sortedList.sort((a,b) => {
            if(a.name > b.name){
                return 1
            }else if(a.name < b.name){
                return -1
            }else{
                return 0;
            }
        })

        this.setState({
            list: sortedList
        })
    }

    sortByPopularity = () => {
        let sortedList = [...this.state.list];
        sortedList.sort((a,b) => {
            if(b.popularity > a.popularity){
                return 1
            }else if(b.popularity < a.popularity){
                return -1
            }else{
                return 0;
            }
        })

        this.setState({
            list: sortedList
        })
    }

    deleteContact = (toDelete) => {
        let newList = [...this.state.list];
        newList.splice(toDelete, 1);
        this.setState({list: newList})
    }

    render(){
        return(
            <div>
                 <button onClick={this.addNewContact}>Add Random Contact</button>
                 <button onClick={this.sortByName}>Sort by name</button>   
                 <button onClick={this.sortByPopularity}>Sort by Popularity</button>   
                {this.displayContacts()}  
                
            </div>
        )
    }
}

export default ContactList;