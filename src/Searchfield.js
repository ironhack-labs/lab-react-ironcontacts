import React from 'react'

export default function Searchfield(props) {

    const handleInputChange = event => {
          props.setQueryProp(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleInputChange}></input>
        </div>
    )
}
