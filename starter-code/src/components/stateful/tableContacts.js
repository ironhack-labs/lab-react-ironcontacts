import React from 'react'
// import './App.css';
// import contacts from './contacts.json'

const tableContacts = (props) => {

  return (
    <table className="App-table">
      <thead className="App-table-head">
        <tr>
          <th colspan="3">IronConctacts</th>
        </tr>
      </thead>
      <tbody className="App-table-body">
        <tr>
          <td><img className="photo" src={props.pictureUrl} /></td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
        </tr>
      </tbody>
      {/* button onClick={props.removeMovieFromState}>Eliminar</button>  */}
    </table>
  )
};

// const tableContacts = props => {
//   return (

//     <tbody>

//       {/* <tr>
//                <th>Picture</th>
//                <th>Name</th>
//                <th>Popularity</th>
//                </tr> */}
//       {/* </tbody>
//            <tbody> */}
//       <tr className="contacts-list-item">
//         <td><img className="photo" src={props.pictureUrl} /></td>
//         <td>{props.name}</td>
//         <td>{props.popularity}</td>
//       </tr>
//     </tbody>
//     /* <button onClick={props.removeMovieFromState}>Eliminar</button> */


//   )
// };

export default tableContacts;