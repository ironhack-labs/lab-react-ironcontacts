import React from "react"

const Contact = ({name,pictureUrl,popularity})=>(
    <tr>
            <td><img src={pictureUrl} alt="name" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
    </tr>
)

export default Contact