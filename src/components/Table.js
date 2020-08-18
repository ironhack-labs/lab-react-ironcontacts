import React from 'react'
import contacts from '../contacts.json';
import TableDetails from './TableDetails'


class Table extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            contactList: contacts.slice(0,5)
        }
    }

    handleAdd = () => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
        this.setState({
            contactList: cloneContacts
        })
    }
    //SORTING ALPHABETICALY
    sortName = () => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.sort((a,b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        })
        this.setState({
            contactList: cloneContacts,
        })
    }

    //SORTING BY POPULARITY
    sortPop = () => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.sort((a,b) => {
            if (b.popularity < a.popularity){
                return -1
            }
            else if (b.popularity > a.popularity){
                return 1
            }
            return 0
        })
        this.setState({
            contactList: cloneContacts,
        })
        
    }
    //HANDELING DELETE
    handleDelete = (id) => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.splice(id, 1)
        this.setState({
            contactList: cloneContacts
        })
    }


       render() {
       return (
           <div>
               <button onClick={this.handleAdd}>Add a random celebrity</button>
               <button onClick={this.sortName}>Sort by name</button>
               <button onClick={this.sortPop}>Sort by popularity</button>
               <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     this.state.contactList.map((celebrity, i) => {
                         console.log(celebrity)
                         return <TableDetails 
                         table={celebrity} 
                         key={i}
                         id={i}
                         onDelete={this.handleDelete}
                         />
                     })   
                    }
                </tbody>
                </table>
           </div>
       )
   }
}

export default Table