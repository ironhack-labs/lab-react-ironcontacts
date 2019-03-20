import React from 'react';

const Table = ({ pictureUrl, name, popularity ,deleteContact }) => {
    return (
        <section>
           
            <table class="image-table">
                <tbody>
                <tr>
                    <th>Picture</th>
                    
                    <th>Name</th>
                    
                    <th>Popularity</th>
                    
                    <th>Action</th>
                    
                </tr>
                <tr>
                    <td><img src={pictureUrl} width = "100px" animation="  infinite 10s linear"/></td>
                    <td>{name}</td>
                    <td>{popularity}</td>

                   <td> <button onClick={deleteContact}>Delete</button></td>
                   
                </tr>
                
                </tbody>
                
                
            </table>
            <hr></hr>

        </section >
    )
}

export default Table


