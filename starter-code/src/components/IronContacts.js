import React from 'react';


class IronContacts extends React.Component {
    render() {

        const { name, pictureUrl, popularity } = this.props.data
        const { deleteContact } = this.props

        return (
            <React.Fragment>
                <td><img width='100px' src={pictureUrl} alt={name} /></td>
                <td><h1>{name}</h1></td>
                <td>{popularity} </td>
                <td><button onClick={deleteContact}>Delete</button></td>
            </React.Fragment >
        )
    }
}


export default IronContacts;