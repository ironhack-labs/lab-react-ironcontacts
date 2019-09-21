import React, { Component } from 'react';
class ContactList extends Component {

    displayContacts = () => {
        return this.props.filteredContacts.map((contact, index) => {
            return (
                <div key={index}
                    className="card"
                    style={{
                        border: "solid black 1px",
                        padding: "10px",
                        margin: "10px",
                        width: "50%"
                    }}
                >
                    <h5 className="card-title" >
                        {contact.name}
                    </h5>
                    <img
                        className="card-img-top"
                        style={{
                            height: "300px",
                            width: "220px"
                        }}
                        src={contact.pictureUrl} alt="" />
                    <p className="card-text" >{contact.popularity}</p>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.props.onItemRemove(index)} >
                        delete
                    </button>
                </div>
            )

        })
    }


    render() {
        return (
            <div>
                {this.displayContacts()}
                <button
                    className="btn btn-sm btn-primary"
                    onClick={this.props.onContactAdd}
                >
                    Add Random Contact
                </button>

                <button onClick={this.props.onSort}>
                    Sort By Popularity
                </button>

                <button onClick={this.props.onNameSort}>
                    Sort By Name
                </button>


            </div>
        );
    }
}

export default ContactList;