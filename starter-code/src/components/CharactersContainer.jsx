import React,{Component} from 'react'
import CharactersDisplay from './CharactersDisplay'
import contacts from '../contacts.json'

class CharactersContainer extends Component{
    constructor (){
        super()
        const characters=[]
        
    for (let i = 0; i < 5; i++) {
        characters.push({...contacts[i]})
      }
    
    this.state={
        characters
    }
}

    random =()=>{
        const random = Math.floor(Math.random()*200)
        const {characters} = this.state
        characters.push(contacts[random])
        this.setState(characters)

    }

    sortNombre =()=>{
        const {characters} = this.state
        const sortN = characters.sort((a,b)=> (a.name)-(b.name))
        this.setState(characters:sortN)
    }

    sortPop =()=>{
        const {characters} = this.state
        const sortP = characters.sort((a,b)=> (a.popularity)-(b.popularity))
        this.setState(characters:sortP)
    }

    delete(i){
        const {characters} = this.state
        characters.splice(i,1)
        this.setState({characters})

    }

    showProduct = (e,i)=>{
        return <CharactersDisplay  key={e.name} {...e} delete={()=>this.delete(i)}/>
    }
    tercerForma =()=>{
        const {characters} = this.state
        return characters.map((p,i)=><div key={i}>{p.name}</div>)
    }

    render(){
        console.log(this.state.characters)
        const {characters} = this.state

        return(
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.random} className='boton'>Random</button>
                <button onClick={this.sortNombre} className='boton'>Sort by nme</button>
                <button onClick={this.sortPop} className='boton'>Sort by pop</button>
                <table>
                <thead>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
                </thead>
                <tbody>
                {characters.map(this.showProduct)}
                
                </tbody>
                </table>
                
            </div>
            
        )
        
        }
    }



export default CharactersContainer