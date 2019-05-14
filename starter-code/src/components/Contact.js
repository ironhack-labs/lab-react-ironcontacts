import React from "react"

const Contact = ({name,pictureUrl,popularity,deleteItem})=>(
    <tr>
            <td><img src={pictureUrl} alt="name" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={deleteItem} type="button" >Delete</button></td>
    </tr>
)

export default Contact