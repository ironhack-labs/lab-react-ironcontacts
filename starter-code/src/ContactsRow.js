import React from 'react'
import {Button} from 'antd'

const ContactRow= ({name, pictureUrl, popularity, Delete}) => {
    return (
        <div>
            <table id="card">
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Picture</th>
                      <th>Popularity</th>
                      <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>{name}</td>
                      <td><img src={pictureUrl} width="40%" height="40%"/></td>
                      <td>{popularity}</td>
                      <td><Button type="primary" onClick={Delete}>Delete</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ContactRow