import React from 'react';


const ContacItem = (props) => {

    return (
        <tr>
            <td><img src={props.pictureUrl} className="rounded" alt={props.name} style={{width: '30%', height: 'auto' }}/></td>
            <td>{props.name}</td>
            <td>{Math.round(props.popularity * 100)/100}</td>
        </tr>

    )

}


export default ContacItem;