import React, { Component } from 'react';
import contacts from '../contacts.json'

const TableOfCelebrities = ({ datasrc, del }) => (
    <div>
        <table>
            <tr>
                <th>pictureUrl</th>
                <th>name</th>
                <th>popularity</th>
            </tr>
            {datasrc.map((e, idx) => {
                return (
                    <tr>
                        <td><img src={e.pictureUrl} width='100' /></td>
                        <td>{e.name}</td>
                        <td>{e.popularity}</td>
                        <div style={{ background: 'green', width: 50, height: 50 }} onClick={() => del(idx)}>deleteCeleb</div>
                    </tr>
                )
            })}
        </table>
    </div>
)

class DynamicList extends Component {
    constructor() {
        super()
        this.state = { celebrities: contacts.splice(0, 5) }
    }

    addRandomCeleb() {
        const randomCeleb = Math.floor(Math.random() * contacts.length)
        console.log(contacts[randomCeleb]);
        this.state.celebrities.unshift(contacts[randomCeleb])
        this.setState({ celebrities: this.state.celebrities })
    }

    sortByName() {
        console.log(this.state.celebrities);
        let copy = this.state.celebrities.sort((a,b)=> {
             return a.name.localeCompare(b.name) 
        })
        this.setState({ celebrities: copy })
    }

    deleteCeleb (idx) {
        this.state.celebrities.splice(idx,1)
        this.setState({celebrities:this.state.celebrities})
    }

    render() {
        return (
            <div>
                <div style={{ background: 'red', width: 50, height: 50 }} onClick={() => this.sortByName()}>sort by name</div>
                <br/>
                <div style={{ background: 'blue', width: 50, height: 50 }} onClick={() => this.addRandomCeleb()}>add random celeb</div>
                <br/>
                <TableOfCelebrities datasrc={this.state.celebrities} del={this.deleteCeleb}/>
            </div>
        );
    }
}

export default DynamicList;