import React from "react"
import ContactDetails from './ContactDetails'
import contacts from '../contacts.json';



class Contacts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            celebrityContacts: contacts.slice(0, 5),
            
        } 
    }

 

    // Function to add a celebrity to the list
    addCelebrity = () => {

        let randomCelebrity = contacts[Math.floor(Math.random() * contacts.length)];

        let cloneCelebrities = [...this.state.celebrityContacts]
        cloneCelebrities.unshift(randomCelebrity)
        
        this.setState({
            celebrityContacts: cloneCelebrities,   
        })
    }



    // Function to sort the list of celebrities by alphabetical order
    sortByName = () => {
        let cloneCelebrities = [...this.state.celebrityContacts]
        cloneCelebrities.sort((a,b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        })

        this.setState({
            celebrityContacts: cloneCelebrities
        })
    }



    // Function to sort the list of celebrities by it´s popularity
    sortByPopularity = () => {
        let cloneCelebrities = [...this.state.celebrityContacts]
        cloneCelebrities.sort((a,b) => {
            if (a.popularity < b.popularity){
                return 1
            }
            else if (a.popularity > b.popularity){
                return -1
            }
            return 0
        })

        this.setState({
            celebrityContacts: cloneCelebrities
        })

    }




    // Function to delete a celebrity from the list
    deleteCelebrity = (id) => {
        console.log('Delete working!', id)
        let cloneCelebrities = [...this.state.celebrityContacts]
        cloneCelebrities.splice(id, 1)
        this.setState({
            celebrityContacts: cloneCelebrities
        })
    }





    // Styles for the site
    containerStyles = {
        display: 'flex',
        justifyContent: "space-around",
    }

    buttonStyle = {
        display: "flex",
        justifyContent: "center"  
    }

  

    
    render() {
        return (
            <div>
              <h1 style={this.containerStyles}>IronContacts</h1>
              <div style={this.buttonStyle}>
              <button onClick={this.addCelebrity}>Add Random Contact</button>
              <button onClick={this.sortByName}>Sort by Name</button>
              <button onClick={this.sortByPopularity}>Sort by Popularity</button>
              </div>

              <div style={this.containerStyles}>
                <h3>Pictures</h3>
                <h3>Name</h3>
                <h3>Popularity</h3>
                <h3>Action</h3>
             </div>
            {
            this.state.celebrityContacts.map((contact, i) => {
                return <ContactDetails 
                        key={i} 
                        contact={contact}
                        id={i} 
                        onDelete={this.deleteCelebrity}
                        />
            })  
            }
        </div>
        )
    }
}



export default Contacts