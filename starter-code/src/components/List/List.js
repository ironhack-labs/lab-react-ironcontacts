import React, { Component } from 'react'
import { initialList, filteredList } from '../../datas/BothList'
import './List.css'
import Card from '../Card/Card'

class List extends Component {
    constructor() {
        super()
        this.state = {
            list: initialList,
            otherList: filteredList
        }
    }

    addRandom = () => {
        const list_ = [...this.state.list]
        const otherList_ = [...this.state.otherList]

        list_.push(otherList_.splice(Math.floor(Math.random() * otherList_.length), 1)[0])

        this.setState({ list: list_, otherList: otherList_ })
    }

    deleteOne = idx => {
        const list_ = [...this.state.list]
        const otherList_ = [...this.state.otherList]

        otherList_.push(list_.splice(idx, 1)[1])

        this.setState({ list: list_, otherList: otherList_ })
    }

    sortByName = () => {
        const list_ = [...this.state.list]

        list_.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({ list: list_ })
    }

    sortByPopularity = () => {
        const list_ = [...this.state.list]

        list_.sort((a, b) => b.popularity - a.popularity)

        this.setState({ list: list_ })
    }

    render() {
        return (
            <>
                <button onClick={ this.addRandom }>Add random</button>
                <button onClick={ this.sortByName }>Sort by name</button>
                <button onClick={ this.sortByPopularity }>Sort by Popularity</button>
                <table className='list'>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.list.map((elm, idx) => <Card key={ idx } { ...elm } deleteOne={ () => this.deleteOne(idx) } ></Card>) }
                    </tbody>
                </table>
            </>
        )
    }
}

export default List