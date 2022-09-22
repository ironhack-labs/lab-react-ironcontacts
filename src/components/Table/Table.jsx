import './Table.css'
import contacts from '../../contacts.json' //crear copia de para modificar los arrays copias y no el inicial [...arr]
import React, { Component } from 'react'
import TableRow from './TableRow/TableRow'

const contactsCopy = [...contacts]

class Table extends Component {
    state={
        firstActors: [...contactsCopy].slice(0, 5),
    }

    addRandomActor = () => {
        this.setState((prevState) => {
            const actorsRemaining = contactsCopy.filter(actor => !prevState.firstActors.includes(actor))
            const randomN = Math.round(Math.random() * actorsRemaining.length + 1)

            if(actorsRemaining.length > 0) {
                return {
                    firstActors: [...prevState.firstActors, actorsRemaining[randomN]]
                }
            }
        })
    }

    sortByName = () => {
        this.setState((prevState) => {
            return {
                firstActors: [...prevState.firstActors].sort((a, b) => a.name.localeCompare(b.name))
            }
        })
    }

    sortByPopularity = () => {
        this.setState((prevState) => {
            return {
                firstActors: [...prevState.firstActors].sort((a, b) => b.popularity - a.popularity)
            }
        })
    }

    deleteActor = (identificador) => {
        this.setState((prevState) => {
            return {
                firstActors: [...prevState.firstActors].filter((actor) => actor.id !== identificador)
            }
        })
    }

    render() {
        const { firstActors } = this.state
        return (
            <div className='Table'>
                <div className='table-btns-container'>
                    <button onClick={this.addRandomActor}>ADD RANDOM ACTOR</button>
                    <button onClick={this.sortByName}>SORT BY NAME</button>
                    <button onClick={this.sortByPopularity}>SORT BY POPULARITY</button>
                </div>
                <main className='table-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Won Oscar</th>
                                <th>Won Emmy</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            firstActors.map((actor) => ( // parenthesis funcionan como un return
                                <TableRow key={actor.id} {...actor}
                                onDelete={() => this.deleteActor(actor.id)} //arrow function para poder passar parametro
                                />
                            ))
                        }
                        </tbody>
                    </table>
                </main>
            </div>
        )
    }

}

export default Table