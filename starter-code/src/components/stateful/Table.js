import React, {Component} from "react"
import { Row } from "../stateless/Row";
import "./Table.css"

class Table extends Component {


  render() { 
    return(
      <div>
        <button className="filter" onClick={this.props.addRand}>Add random contact</button>
        <button className="filter" onClick={this.props.sortName}>Sort by Name</button>
        <button className="filter" onClick={this.props.sortPop}>Sort by Popularity</button>
        <table className="actorsTable">
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
          {
          this.props.famous.map((celeb,idx) => <Row {...celeb} key={idx} delete={idx => this.props.delete(idx)}/>)
          }
          </tbody>
        </table>
      </div>
)}
}

export default Table