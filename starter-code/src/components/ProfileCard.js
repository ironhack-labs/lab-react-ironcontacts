import React, {Component} from 'react'
import contacts from '../contacts.json'

//const ProfileCard = contacts.map(one => )
let items = contacts.slice(0,5)
class ProfileCard extends Component{
    state={
        celebrity:items
        
    }
    addRndm = () =>{
        let random = Math.floor(Math.random()*contacts.length)
        items = [...items,contacts[random]]
        this.setState({celebrity: items})//actualiza el state
        console.log(items)
    }
    sortByName = () =>{
        items.sort((a,b)=>{
            if (a.name > b.name) {
                return 1;
              }
            if (a.name < b.name) {
                return -1;
            }
        })
        this.setState({celebrity: items})
        console.log(items)
    }
    sortByPop = () => {
        items.sort((a,b)=>{
            if (a.popularity > b.popularity) {
                return 1;
              }
            if (a.popularity < b.popularity) {
                return -1;
            }
        })
        this.setState({celebrity: items})
    }
    deleteCeleb = () => {
        items.slice(items.indexOf(), 1)
        this.setState({celebrity: items})
        console.log(items)
    }
    render(){
        const { celebrity } = this.state
        return(
            <div className="IronContacts">
                <h1>IronContacts</h1>
                <div className='botones'>
                    <button onClick={this.addRndm}>Add Random Contact</button>
                    <button onClick={this.sortByName}>Sort by Name</button>
                    <button onClick={this.sortByPop}>Sort by pop</button>

                </div>
                <table>
                    <tbody>
                        <tr >
                            <th><h2>Picture</h2></th>
                            <th><h2>Name</h2></th>
                            <th><h2>Popularity</h2></th>
                            <th><h2>Action</h2></th>
                        </tr>
                        {celebrity.map((celeb,i) =>{
                            return(
                                <tr key={i}>
                                    <td><img style={{width: '20vw'}} src={celeb.pictureUrl} alt={celeb.name}/></td>
                                    <td><h3>{celeb.name}</h3></td>
                                    <td>{celeb.popularity}</td>
                                    <button onClick={this.deleteCeleb}> delete</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ProfileCard
