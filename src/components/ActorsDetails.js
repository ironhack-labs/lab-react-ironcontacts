import React from "react";
import "./Actors.css"
import actorsList from '../contacts.json'
import SortByName from "./button";

class ActorsDetails extends React.Component {
  
        state = { list: actorsList.slice(0,5) } 
  
        displayActors = () => {
             
            const limitedList = this.state.list
            return (
                limitedList.map(({ name, pictureUrl, popularity, id },idx)=>{
                    return(
                     
                        <table key={`${idx}-${name}`} class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col"><img src={pictureUrl} alt={name} class="profile-Image"/></th>
                                <th scope="col">{name}</th>
                                <th scope="col">{popularity}</th>
                                <th scope="col">{ <button onClick={() => this.deleteActor(id)}>🗑</button> }</th>
                                </tr>
                            </thead>
                            </table>
                    )
                })
            )}


        addActor = () => {

            const actorsCopy = [ ...this.state.list ]

            actorsCopy.push(actorsList[ Math.floor(Math.random() * actorsList.length ) ])
            
            this.setState ({

                ...this.state,
                list: actorsCopy
            })

        }


        sortByName = () => {
            
            let actorsCopy = this.state.list.map(actor => actor);
            actorsCopy.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({
                ...this.state,
                list: actorsCopy

            })
        }


        sortByPopularity = () => {
            
            let actorsCopy = this.state.list.map(actor => actor)
            actorsCopy.sort((actor1, actor2) => actor1.popularity - actor2.popularity)
            this.setState({
                ...this.state,
                list: actorsCopy
            })
        }


        deleteActor = (id) => {

            this.setState({
                ...this.state,
                list: this.state.list.filter(actor => actor.id !== id)
            })
        }


        render(){

            return(
            <div>
                <p>{ this.displayActors() }</p>  

                    <section>

                        <button onClick={ () => this.addActor() }> Add Actor </button>
                        <button onClick={ () => this.sortByName() }> Sort by name </button>
                        <button onClick={ () => this.sortByPopularity() }> Sort by popularity </button>

                    </section>
            </div>
                 
            )}        
}

export default ActorsDetails;