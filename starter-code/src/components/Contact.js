import React, { Component } from 'react'

// import { Table, Divider } from 'antd';

class Contact extends Component{
    render(){
        let {name, popularity, pictureUrl } = this.props
        return (
            <div>
                {name}
                {popularity}
                <img src={pictureUrl} alt="phot" height="100" width="100" />
    
            </div>
        )
    }
}

export default Contact
