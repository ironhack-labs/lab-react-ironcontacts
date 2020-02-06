import React from 'react'
import './Buttons.css'


const OrderPopularity = (props) => {
    return(
            <button className="sergio" onClick={props.addOrderPopularity} >
                ORDER BY POPULARITY
            </button>
    )
}

export default OrderPopularity