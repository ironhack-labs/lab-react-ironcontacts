import React  from 'react'

const CelebrityDetail = (props) => {
    return (
        <React.Fragment>
            <button onClick={()=>{props.deleteCelebrityFunc(props.detail.id)}}>Delete</button>
        <tr>
            <td><img style={{width:100}} src={props.detail.pictureUrl} alt="img"/></td>
            <td>{props.detail.name}</td>
            <td>{props.detail.popularity.toFixed(2)}</td>
        </tr>
        </React.Fragment>
        
    )
}


export default CelebrityDetail


