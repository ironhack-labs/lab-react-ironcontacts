import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Container = props => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

export default Container
