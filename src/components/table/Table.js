import React from 'react'
import './Table.css'
import OneTableElem from './OneTableElem'
import contacts from './contacts.json';


class Table extends React.Component {
    
    state = {
        table: [...contacts].slice(0, 5)
    }

    handleRandom = () => {
        let rng = Math.floor(Math.random()*contacts.length)
        if (this.state.table.includes([...contacts][rng].id)){
            //infinite loops ftw
            this.handleRandom()
        } else {
            this.state.table.push([...contacts][rng])
            this.setState({})
            return;
        }
    }

    handleSortPop = () => {
        this.state.table.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1
            } else if (a.popularity > b.popularity) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({})
    }
    
    handleSortName = () => {
        this.state.table.sort((a, b) => {
            if (a.name < b.name) {
                return 1
            } else if (a.name > b.name) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({}) 
    }

    handleDelete = (celebId) => {
        let filteredArr = this.state.table.filter((celeb) => {
            return celeb.id !== celebId
        })

        this.setState({
            table: filteredArr
        })
    }

    render(){
    return (
        <>  
            <button onClick={ () => { this.handleSortPop() } }>Sort by popularity</button>
            <button onClick={ () => { this.handleSortName() } }>Sort by name</button>
            <button onClick={ () => { this.handleRandom() } }>Add Random Contact</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.table.map((detail, i)=>{
                    console.log('log in map')
                   return <OneTableElem deleteHandler={this.handleDelete} key={detail.id} detail={detail} />
                })}
                </tbody>
            </table>
       </>
   )
} 
}

export default Table