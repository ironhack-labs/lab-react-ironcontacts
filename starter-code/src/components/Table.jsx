import React, { Component } from 'react'
import contacts from '../contacts.json'
import Rows from './Rows'

class Table extends Component {
    state = {chars: []}
    componentWillMount() {

       function gimmeFive (elements) {
            let celArray = []
            for(let i=0; i<5;i++){
                celArray.push(elements[i])
            }
            return celArray
        }
        
        this.setState({chars: gimmeFive(contacts)})
    }

    randomContact = () => {
        console.log('ckicked')
        const {chars} = this.state
        let ran = Math.floor(Math.random() * contacts.length)
        chars.push(contacts[ran])
        this.setState({chars})
    }

    check = (a,b, property, order) => {
        if(a[property] < b[property]) return order
        if(a[property] > b[property]) return -order
        return 0
    }

    sortName = () => {
        let {chars} = this.state
        chars.sort((a, b)=>this.check(a, b, "name", -1))
        this.setState({chars})
    }

    sortPopularity = () => {
        let {chars} = this.state
        chars.sort((a, b)=>this.check(a, b,"popularity",1))
        this.setState({chars})
    }

    removeItem = (e) => {
        let {chars} = this.state
        chars.splice(e.target.id, 1)
        this.setState({chars})
    }

    drawFamous () {
        const {randomContact, sortName, sortPopularity, removeItem} = this
        const {chars} = this.state
        return(<div>
            <button onClick={randomContact}>Create random contact!</button>
            <button onClick={sortName}>Sort by Name</button>
            <button onClick={sortPopularity}>Sort by Popularity</button>
            <tr>
                <th>Name</th>
                <th>Picture</th>
                <th>Popularity</th>
            </tr>
            {chars.map((item, index) => {
                return <Rows key={index} {...item} index={index} removeItem={removeItem}/>
            })}
        </div>)
    }

    render(){
        return this.drawFamous()
    }
}

export default Table