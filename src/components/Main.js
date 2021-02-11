import React from 'react';
import contacts from './../contacts.json';


function Main()  {

        return <table align="center" cellspacing="0" cellPadding="0" border="0" >
        <tbody>
        <tr>
            <td><h3>Picture</h3></td>
            <td><h3>Name</h3></td>
            <td><h3>Popularity</h3></td>
        </tr>
 
            {listFamous()}
 
        </tbody>
        </table>
    }

// map iterar sobre cada elemento
function listFamous() {
    const state = contacts.splice(0, 5)
    const styles={
        width : 60
    }
    return state.map((d) => (
      <tr>
      <td>
      <img style={styles} alt={d.name} src={d.pictureUrl} />
    </td>
    <td>
    <h4>{d.name}</h4>
    </td>
    <td>
    <p>{d.popularity}</p>
        </td>
    </tr>
 
    ));
  }

export default Main