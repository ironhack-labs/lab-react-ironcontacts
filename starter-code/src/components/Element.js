import React from 'react'

const Element = ({index, name, pictureUrl, popularity})=> {
    return(
        <tr>
            <th>{name}</th>
            <th><img src={pictureUrl} alt=""/></th>
            <th>{popularity}</th>
        </tr>
    )
}

export default Element