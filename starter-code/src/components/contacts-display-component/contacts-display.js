import React from 'react';
import contacts from '../../contacts.json';
import './contacts-display.css';

class ContactsDisplay extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                contactList: contacts,
                visibleList: contacts.slice(0, 5),

            }
        }

        delete = (ind) => {
            this.props.changeShow();
            console.log(this.props.deleteFlag)
            if(this.props.deleteFlag) {
                this.state.visibleList.splice(ind, 1);
                console.log(this.state.visibleList)
            }
                this.setState({
                    visibleList: this.state.visibleList
                })
                this.visibleList = this.perform();
          
            return this.visibleList;
        }
   perform = () => {

    this.visibleList = this.state.visibleList.map((contact,index) => {
        return ( 
         
          <tr key={index}>
 <td><img className="pic" src = {contact.pictureUrl}/></td>
 <td>{contact.name}</td>
 <td>{contact.popularity}</td>
 <td><button className="delete" onClick={()=>{this.delete(index)}}>Delete</button></td>
           </tr>
          
 
            )
})   
return this.visibleList;
   }
    render() {
        if (this.props.rand.randomNo > -1) {
            this.state.visibleList.push(this.state.contactList[this.props.rand.randomNo]);
        }
        if (this.props.sortName.sortFlag) {
            this.state.visibleList.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (this.props.sortPop.sortFlag) {
            this.state.visibleList.sort((a, b) => {
                return (a['popularity'] > b['popularity']) ? 1 : (a['popularity'] < b['popularity']) ? -1 : 0;
            })
        }
        this.visibleList = this.perform();

        return this.visibleList;

    }
    }

export default ContactsDisplay;