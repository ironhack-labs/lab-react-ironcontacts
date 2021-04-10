import React from 'react'
import Row from './Row'

function Table(props) {
  return (
    <div className="Table">
        <table className="table table-dark table-hover">
            <thead>
                <tr className="darkBg">
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                { props.contacts.map(contact => {
                    return <Row contact={contact} key={contact.id} onClick={props.onClick}/>
                })}
            </tbody>
        </table>
    </div>
  );
}

export default Table;