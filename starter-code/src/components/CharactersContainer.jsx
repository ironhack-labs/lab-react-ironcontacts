import React,{Component} from 'react'
import CharacterDisplay from './CharactersDisplay'
import contacts from '../contacts.json'
import './Character.css'


class CharactersContainer extends Component{
  state={
    characters:[
      {
        name: "Idris Elba",
        pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        popularity: 11.622713
      },
      {
        name: "Jessica Chastain",
        pictureUrl: "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
        popularity: 8.324357
      },
      {
        name: "Johnny Depp",
        pictureUrl: "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        popularity: 15.656534
      },
      {
        name: "Emilia Clarke",
        pictureUrl: "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
        popularity: 16.211837
      },
      {
        name: "Leonardo DiCaprio",
        pictureUrl: "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
        popularity: 11.245333
      }
    ]
  }

  showCharacter =(characters,index)=>{
    return <CharacterDisplay key={index} {...characters} del={()=>this.delete(index)}/>
  }

  onClick=()=>{
    const random = Math.floor((Math.random()*195)+5)
    const {characters} = this.state
    characters.push(contacts[random])
    this.setState(characters)
    
    //console.log(contacts[random])
  }
  delete=(index)=>{
    const {characters} = this.state
    characters.splice(index,1)
    this.setState(characters)
  }
  sortByName=()=>{
    const {characters} = this.state
    characters.sort()
    this.setState(characters)
  }

  sortByPopularity=()=>{
    const {characters} = this.state
    characters.sort((a,b)=>(a.popularity)-(b.popularity))
    this.setState(characters)
  }

  render(){
    const {characters} = this.state
    console.log(this.state.characters)
    return(
      <div>
      <button onClick={this.onClick} className='boton'>Add Random Contact</button>
      <button onClick={this.sortByName} className='boton'>Sort by Name Contact</button>
      <button onClick={this.sortByPopularity} className='boton'>Sort by Popularity</button>
      {characters.map(this.showCharacter)}
      </div>
    )
  }
}

export default CharactersContainer