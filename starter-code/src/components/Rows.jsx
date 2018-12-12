import React, { Component } from 'react'

const Rows = ({name, pictureUrl, popularity,removeItem, index}) => {
    return(<tr>
       <td>{name}</td>
       <td><img src={pictureUrl} alt=""/></td>
       <td>{popularity}</td>
       <td><button onClick={removeItem} id={index}>Remove</button></td>
    </tr>)
}

export default Rows