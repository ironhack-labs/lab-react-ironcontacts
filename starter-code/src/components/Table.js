import React from 'react'
import shortid from "shortid";
import MagicButton from "./MagicButton"
import "./Table.css"
import Tilt from 'react-tilt';
import $ from 'jquery';


export default function Table(props) {
    const { contacts } = props;
    return (
        <table>
            <tbody>
                <tr key={shortid.generate()}>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                {
                    contacts.map(contact=>
                        <tr key={shortid.generate()}>
                            
                            <td>
                                <Tilt className="Tilt" options={{ 
                                    max : 30,
                                    scale: 1.2,
                                    reverse: true,
                                    perspective: 300,
                                    }}>
                                    <img className="tilt" data-tilt src={contact.pictureUrl} alt="" className="picture"/>
                                </Tilt>
                            </td>

                            <td className="name">{contact.name}</td>
                            <td>{(contact.popularity).toFixed(2)}</td>
                            <td>
                                <MagicButton
                                    isDeleteMe 
                                    funcion={()=>props.children(contact.name)}
                                    name={contact.name} 
                                    text="DELETE"/>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}


//Tried to make a 360º flip to names on hover
$(".name").hover(()=>console.log("a"))