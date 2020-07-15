import contacts from '../contactsRawData.json'
import React, { Component } from 'react'


const Contact = (props) => {
    const { name, popularity, pictureUrl } = props.data;

    return (
        <>
            <tr>
                <td>
                    <img style={{ width: "50px" }} src={pictureUrl} alt="contactpic" />
                </td>
                <td> {name} </td>
                <td> {popularity.toFixed(2)}</td>
                <button
                    onClick={() => {
                        props.deleteContact();
                    }}
                >
                    {" "}
                Delete{" "}
                </button>
            </tr>
        </>
    );

};

export default Contact;