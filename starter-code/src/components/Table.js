import React from "react";
import { Row } from "./Row";
import celebrity from "../contacts.json";
import { Button } from "./Button";

export class Table extends React.Component {
  constructor() {
    super();
    this.state = { cel: celebrity.slice(0, 5) };
    this.list = celebrity.slice(5);
  }

  addContact() {
    this.list.sort(function() {
      return 0.5 - Math.random();
    });
    this.state.cel.push(this.list[0]);
    this.list.shift();
    this.setState({ cel: this.state.cel });
  }

  sortByName() {
    this.state.cel.sort(function(a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    this.setState({ cel: this.state.cel });
  }
  sortByPopularity() {
      this.state.cel.sort((a,b)=>{
          if(a.popularity<b.popularity) return 1
          if(a.popularity>b.popularity) return -1;
          return 0
      })
      this.setState({ cel: this.state.cel });
  }
  deleteItem(key){
     this.state.cel.splice(key,1)
      this.setState({ cel: this.state.cel });

  }

  render() {
    return (
      <div>
        <Button func={() => this.addContact()}>Add random Contact</Button>
        <Button func={() => this.sortByName()}>Sort by name</Button>
        <Button func={() => this.sortByPopularity()}>Sort by popularity</Button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.state.cel.map((e, i) => (
              <Row
                key={i}
                img={e.pictureUrl}
                name={e.name}
                popularity={e.popularity}
                ctx={[this,i]}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
