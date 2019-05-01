import React from "react";

class Card extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div className="movie">
                <img src={this.props.data.pic} alt="" width="40px"/>
                {this.props.data.name}
                {this.props.data.pop}
            </div>  
        )
    }
}

export default Card;