import React, {Component} from 'react';
import ContactRow from './ContactRow';

class ContactTable extends Component{
   


    render(){
   const {contacts } = this.props;  
   console.log(this.props.contacts) 
  
        return(
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
                          contacts.map((e,i) =>{
                              return (<ContactRow key={"contact-"+i} contact={e} />)
                          })
                        

                       
                    }
                </tbody>
              
            </table>
        )
    }

}
export default ContactTable