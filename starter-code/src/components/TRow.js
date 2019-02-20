import React,{Component} from "react";
import "./TRow.css";
import Button from "./buttons/Button";

class TRow extends Component{
    render() {
        return (
            <tr key={this.props.idx}>
                <td><img src={this.props.contact.pictureUrl}/></td>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.popularity.toFixed(2)}</td>
                <td><Button onClick={() => this.props.onClick(this.props.idx)}>delete</Button></td>
            </tr>
        )
    }
}

export default TRow