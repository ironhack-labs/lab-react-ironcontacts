import React, { Component } from 'react'
import contacts from '../contacts.json'
import CelebrityDetail from './CelebrityDetail'

export default class Celebrities extends Component {
    state = {
        celebrityList: contacts.slice(0, 5)
    }

    handleRandom = () => {
        let newCelebrityList = [...this.state.celebrityList]

        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]

        console.log(randomContact)
        newCelebrityList.push(randomContact)

        this.setState({
            celebrityList: newCelebrityList
        })
    }

    handleSortName = () => {
        let nameCelebrity = [...this.state.celebrityList]

        nameCelebrity.sort((a,b) => {
            if(a.name > b.name){
                return 1
            } else if(a.name < b.name){
                return -1
            } else {
                return 0
            }
        })

        this.setState({
            celebrityList: nameCelebrity
        })
    }

    handleSortPopularity = () => {
        let popularityCelebrity = [...this.state.celebrityList]

        popularityCelebrity.sort((a,b) => {
            if(a.popularity > b.popularity){
                return -1
            } else if(a.popularity < b.popularity){
                return 1
            } else {
                return 0
            }
        })

        this.setState({
            celebrityList: popularityCelebrity
        })
    }

    handleDelete = (someId) => {
        //delete the element here
        console.log('ULALALALALAL', someId)

        let filteredCelebrities = this.state.celebrityList.filter((celebrity) => {
            return celebrity.id !== someId
        })
        
        this.setState({
            celebrityList: filteredCelebrities
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleSortName}>Sort by name</button>
                <button onClick={this.handleSortPopularity}>Sort by popularity</button>
                <button onClick={this.handleRandom}>Add Random Celebrity</button>
                    {this.state.celebrityList.map((celebrity, i) => {
                        return <div key={i}>
                            <CelebrityDetail key={celebrity.id} detail={celebrity} deleteHandler={this.handleDelete} />
                                    <div>
                                    {celebrity.name}
                                    </div>
                                    <div>
                                    {celebrity.popularity}
                                    </div>
                                    <div> 
                                        <img width="100px" src={celebrity.pictureUrl} /> 
                                    </div>
                                </div>
                })}
            </div>
        )
    }
}



