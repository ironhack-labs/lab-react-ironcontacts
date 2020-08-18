import React from 'react'

function RandomBtn(props) {
    return <button onClick={() => props.onRandom(props.wholeArr)} className="btn">{props.children}</button>
}

export default RandomBtn;