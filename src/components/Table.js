import React from 'react'

function Table(props) {
    let myStyle = {
        height: '150px',
        width: '100px'
    }

    return (<div>
        <table>
            <tr>
                <td><img src={props.pictureUrl} alt="celebrity-img" style={myStyle} /></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
                <button onClick={() => { props.delete(props.name) }}>Delete</button>
            </tr>
        </table>
    </div>)
}

export default Table;