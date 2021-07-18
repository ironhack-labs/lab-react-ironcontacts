import React, { Component } from 'react';
import actorList from '../../Data/contacts.json'
import TableRow from '../TableRow/TableRow.js';
import './TableStructure.css'

class TableStructure extends Component {

    state = {
        list: actorList.splice(0,4),
    }

    handleAddRandom = () => {
        const arr = [...actorList]
        const index = Math.floor(Math.random() * actorList.length);
        let newLIst = [...this.state.list, arr[index]]
        newLIst.splice(index,1)

        this.setState({
            list: newLIst,
        });
    }

    handleSortByName(){
        const sortList = this.state.list.sort( (a,b) => {
            switch(true){
                case a.name > b.name:
                    return 1;
                case a.name < b.name:
                    return -1;
                default:
                    return 0;
            }})
        this.setState({
            list: sortList,
        });
    }

    handleSortByPop() {
        const sortList = this.state.list.sort( (a,b) => b.popularity - a.popularity)
        this.setState({
            list: sortList,
        });
    }


    handleDeleteTr = (id) => {
        const newActor = [...this.state.list]
        const index = newActor.findIndex( actor => actor.id === id);
        newActor.splice(index, 1);
        console.log(id, index)
        this.setState({
            list: newActor,
        });
      };
    render() {
        return(
            <>
            <div className = 'div-btn'>
                <button onClick ={() => {this.handleAddRandom()}}>Add Random Actor</button> 
                <button onClick ={() => {this.handleSortByName()}}>Sort By Name</button>
                <button onClick ={() => {this.handleSortByPop()}}>Sort By Popularity</button>
            </div>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
                {this.state.list.map(actor => <TableRow
                 key = {actor.id} {...actor} deleteActor={this.handleDeleteTr}/>)}
            </table>
            </>
        );
    }
}

export default TableStructure