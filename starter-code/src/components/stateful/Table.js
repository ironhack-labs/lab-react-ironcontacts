import React, {Component} from "react"
import { Row } from "../stateless/Row";

class Table extends Component {


  render() { 
    return(
      <div>
        <button onClick={this.props.addRand}>Add random contact</button>
        <button onClick={this.props.sortName}>Sort by Name</button>
        <button onClick={this.props.sortPop}>Sort by Popularity</button>
        <table>
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          </thead>
          {
          this.props.famous.map((celeb,idx) => <Row {...celeb} key={idx} delete={idx => this.props.delete(idx)}/>)
          }
        </table>
      </div>
)}
}

export default Table