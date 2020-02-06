import React from 'react'
import './Buttons.css'


const Random = (props) => {
    return(
            <button className="sergio" onClick={props.addRandom} >
                ADD RANDOM
            </button>
    )
}

export default Random
