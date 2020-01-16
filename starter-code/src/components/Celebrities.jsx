import React from 'react';
import './Celebrities.scss'

const Celebrities= (props) => {
    return(
            // <div className="celebrity">
                <tr className="celebrity">
                    <td>
                        <img src={props.pictureUrl} alt=""/>
                    </td>
                    <td>
                        <p>{props.name}</p>
                    </td>
                    <td>
                        <p>{props.popularity}</p>
                    </td>
                </tr>
            // </div>
    )
}

export default Celebrities;