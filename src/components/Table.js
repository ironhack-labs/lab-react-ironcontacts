import React from 'react';
import './contactList'

function Table ({pictureUrl, name, popularity, id}) {
    return(
        <div className="table">
                <table>
                    <thead>
                        <tr>Iron Contacts</tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Picture</td>
                            <td>Name</td>
                            <td>Popularity</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>{pictureUrl}</td>
                            <td>{name}</td>
                            <td>{popularity}</td>
                            <td>{id}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Table;
