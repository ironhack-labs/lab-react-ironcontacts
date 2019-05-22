import React from 'react'

class AddRandomContact extends React.Component{
    
      onClickAddRandomContact = () => {
        const newContact = this.state.contacts.filter(c => !this.state.firstContacts.includes(c))
    
        const randomContact = newContact[Math.floor(Math.random() * newContact.length)]
    
        this.setState({ firstContacts: [...this.state.firstContacts, randomContact] })
      }
    

    render() {
        const { contact, isAdded } = this.props

        return (
            <div>
                <button className="card-link btn btn-sm btn-primary" onClick={this.onClickAddRandomContact}>Add Random Contact</button>
            </div>
        )
    }
}

export default AddRandomContact   