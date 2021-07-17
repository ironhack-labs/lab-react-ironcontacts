import { Component } from "react";
import Table from "./Table";
import Contacts from '../contacts.json'




function Tablerow ({pictureUrl, name, popularity,id, deleteMovie}) {
    
        return(
            
        <tr>
          <td><img style= {{width:'80px'}} src = {pictureUrl}/></td>
          <td>{name}</td>
          <td>{popularity}</td>
          <td><button onClick = {() => {deleteMovie(id)}}>Delete</button></td>
        </tr>
        )
    }



export default Tablerow