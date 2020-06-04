import React, { Component } from 'react';
import styled from "styled-components";

function ShowFirstFive(props) {

    const Button  = styled.button`
         background-color: blue
        
    `;
    
        return (
                // <table>
                //     <thead>
                //           <tr>
                //             <th>Picture</th>
                //             <th>Name</th>
                //             <th>Popularity</th>
                //         </tr>
                //     </thead>
                    
                    <tbody>
                        <tr>
                            <td><img src={props.picture} style={{width: 50, height:50}} alt="im"></img></td>
                            <td>{props.name}</td>
                            <td>{props.popularity}</td>
                            <td><Button onClick={props.clickToDelete}>Delete</Button> </td>
                        </tr>
                    </tbody>
                   
                // </table>         
        )
    
}

export default ShowFirstFive
