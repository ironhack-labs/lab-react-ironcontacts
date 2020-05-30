import React, { Component } from 'react';

class Celebrity extends Component{
    render()
    {
        return(
            <div>
                <img src={this.props.pictureUrl} />
                <br />
                Name : {this.props.name}
                <br />
                Popularity : {this.props.popularity}
                <button onClick={() => this.props.deleteHandler(this.props.celebrityId)}>Remove Celebrity</button>
            </div>
        )
    }
}


export default Celebrity