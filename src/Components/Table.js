import React from 'react';
import '../App.css';
import FinalRow from './FinalRow';

export default function Table({celebs, deleteContact}){
    console.log(celebs)
     
        return (
            <table className='contacts-container'>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {celebs.map((actors) => (
                        <FinalRow 
                            key={actors.id} 
                            contact={actors}
                            deleteContact={deleteContact}
                        />
                    ))}
                </tbody>
            </table>
        )
};
    