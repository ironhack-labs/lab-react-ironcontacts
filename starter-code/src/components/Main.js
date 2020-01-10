import React, { Component } from 'react';
import ContactTable from './ContactTable'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <ContactTable contacts={this.props.contacts}/>
            </div>
         );
    }
}
 
export default Main;