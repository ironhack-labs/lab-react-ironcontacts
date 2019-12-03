import React from 'react'

export default function MagicButton(props) {
    const {funcion, text, name} = props
    return (
        props.isDeleteMe ?
            <button className="delete-btn" onClick={funcion}>{text}</button>
        :
            <button className="filter-btn" onClick={funcion}>{text}</button>
    )
}
