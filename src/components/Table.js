import contacts from '../contacts.json'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons';




function Table() {
    const [firstFive, setFirstFive] = useState(contacts.slice(0, 5))
    for (let i = 0; i<firstFive.length; i++) {
        if (firstFive[i].wonOscar === true) {
            <FontAwesomeIcon icon={faTrophy} />
        }
        if (firstFive[i].wonEmmy === true) {
            <FontAwesomeIcon icon={faTrophy} />
        }
    }
    return (
        <div>
        
            {firstFive.map((contact) => (
                <li className="list-group-item" key={contact.name}></li>
            ))}
            <h2>First five contacts</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rate of opularity</th>
                        <th scope="col">Won an Oscar</th>
                        <th scope="col">Won an Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> <img className='contactPicture' src={firstFive[0].pictureUrl} /> </td>
                        <td> {firstFive[0].name}</td>
                        <td> {(firstFive[0].popularity).toFixed(2)}</td>
                        <td> {firstFive[0].wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
                        <td> {firstFive[0].wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td> <img className='contactPicture' src={firstFive[1].pictureUrl} /> </td>
                        <td> {firstFive[1].name}</td>
                        <td> {(firstFive[1].popularity).toFixed(2)}</td>
                        <td> {firstFive[1].wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
                        <td> {firstFive[0].wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td> <img className='contactPicture' src={firstFive[2].pictureUrl} /> </td>
                        <td> {firstFive[2].name}</td>
                        <td> {(firstFive[2].popularity).toFixed(2)}</td>
                        <td> {firstFive[2].wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
                        <td> {firstFive[0].wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>
                        </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td> <img className='contactPicture' src={firstFive[3].pictureUrl} /> </td>
                        <td> {firstFive[3].name}</td>
                        <td> {(firstFive[3].popularity).toFixed(2)}</td>
                        <td> {firstFive[3].wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
                        <td> {firstFive[0].wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>
                        </tr> 
                    <tr>
                        <th scope="row">5</th>

                        <td> <img className='contactPicture' src={firstFive[4].pictureUrl} /> </td>
                        <td> {firstFive[4].name}</td>
                        <td> {(firstFive[4].popularity).toFixed(2)}</td>
                        <td> {firstFive[4].wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
                        <td> {firstFive[0].wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>

                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Table