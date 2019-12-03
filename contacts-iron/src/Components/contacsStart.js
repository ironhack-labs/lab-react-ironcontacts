import React,{Component} from "react"
import Starts from "./Starts";
import contacts from '../contacts.json'


class List extends Component {
    constructor(){
        super ()
        this.state ={
             contactsCopy : [...contacts].splice(0,5)

        }
    }

    addMovieHandler = () => {
        const copyCopy = [...this.state.contactsCopy]
        copyCopy.push(contacts[Math.floor(Math.random()*(contacts.length-5)+5)])
        this.setState({contactsCopy:copyCopy})
    } 

    sortMovieName = () => {
        // alert("mira que si funciono")
        const copy = [...this.state.contactsCopy]
        copy.sort(function (a,b) {
            if(a.name<b.name){
                return -1
            }else if(a.name>b.name){
                return 1
            }else{
                return 0
            }
        })
        console.log(copy)
        this.setState({contactsCopy:copy})

    }

    sortMoviePopularity = () => {
        // alert("soy el otro boton")
        const copy = [...this.state.contactsCopy]
        copy.sort(function (a,b) {
            return b.popularity-a.popularity
            
        })
        this.setState({contactsCopy:copy})
    }

    deleteMovieHandler = id => {
        // alert("soy el ultimo")
        const copy =[...this.state.contactsCopy]
        copy.splice(id,1)
        this.setState({contactsCopy:copy})
    }

    render(){
        return(
            <>
        <div className="row justify-content-center">
            <div className="col-md-2">
                <p>Picture</p>
            </div>
            <div className="col-md-2">
                <p>Name</p>
            </div>
            <div className="col-md-2">
                <p>Popularity</p>
            </div>
        </div>
        <div className="row justify-content-center">
        <button onClick={this.addMovieHandler} className="btn btn-sm btn-dark" >Add Random Contact</button>
        <button onClick={this.sortMovieName} className="btn btn-sm btn-light mx-2" >Sort by Name</button>
        <button onClick={this.sortMoviePopularity} className="btn btn-sm btn-warning" >Sort by Popularity</button>
        </div>
            {this.state.contactsCopy.map((props,idx)=>{
                return(
              <Starts key={idx} {...props} deleteMovieHandler={()=>this.deleteMovieHandler(idx)}/>  
              )
            })}
            </>
  

        )
    }  
}

export default List