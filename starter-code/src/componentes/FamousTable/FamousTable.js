import React from 'react'

const FamousTable = props => {
    return (
        
        <>
        
        <tr>
            <td class="align-middle"><img src={props.imgurl}/></td>
            <td class="align-middle">{props.famousname}</td>
            <td class="align-middle">{parseFloat(props.popularity).toFixed(2)}</td>
            <td class="align-middle"><button className="btn btn-danger shadow" onClick={props.deleteFamous}>Delete</button></td>
            

        </tr>
        </>
    )
}

export default FamousTable