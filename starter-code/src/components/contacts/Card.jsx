import React from 'react';
import './Card.css'

const Card = ({name, popularity, picture}) => {
    return (
            <>
                <td className='row'>
                    <div>
                    <img src={picture} width='80' height='100'/>

                    </div>
                </td>
                <td className='row'>
                    <div>

                    {name}
                    </div>
                </td>
                <td className='row'>
                    <div>

                    {popularity}
                    </div>
                </td>
               
            </>

    )

}

export default Card;