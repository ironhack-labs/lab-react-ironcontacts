import React, { Component} from 'react';

class Contacts extends Component {
    render() {
         //datos que ocuparà data
        const { name, pictureUrl, popularity } = this.props.data
        const { deleteContact } = this.props
     
        return (
            <>
                <td><img width='100em'  src={pictureUrl} alt={name} /></td>
                <td><h3>{name}</h3></td>
                <td>{popularity} </td>
                <td><button onClick={deleteContact} >Delete</button></td>
            </>
        )
    }
}

export default Contacts;