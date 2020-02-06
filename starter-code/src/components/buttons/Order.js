import React from 'react'


const Order = (props) => {
    return(
            <button className="sergio" onClick={props.addOrder} >
                ORDER BY NAME
            </button>
    )
}

export default Order