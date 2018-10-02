import React, { Component } from 'react';
import contacts from '../contacts.json';

const newArr = contacts.splice(0, 5);

export const Table = () => {
  console.log(contacts)
    return (
      <div className="Table">
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
            { newArr.map((oneContact,index) => {
              return (
              <tr>
              {/* <contacts key={index} picture={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} /> */}
        <td><img src={oneContact.pictureUrl} alt="" width="100"></img></td>
        <td>{oneContact.name}</td>
        <td>{Math.round(oneContact.popularity * 100) / 100}</td>
          </tr>)
            }
            )}
          </tbody>
        </table>
      </div>
    );
}