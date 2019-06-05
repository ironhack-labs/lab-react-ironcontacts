import React, {Component} from 'react';
import Button from './Button';
class Header extends Component{

    render(){

        return (
 <div>

        <h1>IronContacts</h1>
        <Button actionButton={this.props.actionHeader[0]} type="Button" className="btn btn-dark ">Add random Contact</Button>
        <Button actionButton={this.props.actionHeader[1]} type="Button" className="btn btn-info m-2 ">Sort by name</Button>
        <Button actionButton={this.props.actionHeader[2]} type="Button" className="btn btn-success ">Sort by popularity</Button>
 </div>

        )
    }

}

export default Header;
