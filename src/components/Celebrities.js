import React from 'react'
import contacts from '../contacts.json'


class Celebrities extends React.Component {

    constructor(props){
        super(props)

        this.state={
          celebrities: contacts.slice(0, 5)
        }
    }


    randomClick = () => {
      let cloneCelebrities = [...this.state.celebrities]

      cloneCelebrities.push(contacts[Math.floor(Math.random()*contacts.length)])

      this.setState({
        celebrities: cloneCelebrities
      })
    }


    sortName = () => {
      let cloneCelebrities = [...this.state.celebrities]
      cloneCelebrities.sort((a,b) => {
          if (a.name > b.name){
              return 1
          }
          else if (a.name < b.name){
              return -1
          }
          return 0
      })

      this.setState({
        celebrities: cloneCelebrities
      })
    }


    sortPop = () => {
      let cloneCelebrities = [...this.state.celebrities]
      cloneCelebrities.sort((a,b) => {
          if (a.popularity < b.popularity){
              return 1
          }
          else if (a.popularity > b.popularity){
              return -1
          }
          return 0
      })
    
      this.setState({
        celebrities: cloneCelebrities
      }) 
    }


    onDelete = (id) => {
      let cloneCelebrities = [...this.state.celebrities]
      cloneCelebrities.splice(id, 1)

      this.setState({
        celebrities: cloneCelebrities
      }) 
    
    }

    render(){
      // in line CSS
      let imgStyle = {
        width: '130px'
      } 

      let cartStyle = {
        width: "80%",
        display: "flex",
        margin: "20px",
      }

      return (
        <>
          <div>
            <button onClick={this.randomClick}>Add Random Contact</button>
            <button onClick={this.sortName}>Sort by name</button>
            <button onClick={this.sortPop}>Sort by popularity</button>
          </div>
          
          <br/>
          <br/>

          {
            this.state.celebrities.map((celebrity, i) => {
                return (
                  <div key={"celebrity"+i} style = {cartStyle}>
                    <img src={celebrity.pictureUrl} style= {imgStyle}/>
                    <p>{celebrity.name}</p>
                    <p>{celebrity.popularity}</p>   
                    <button onClick={() => this.onDelete(i)}>Delete</button>              
                  </div>  )      
               
            })  
          }

        </>

      )
    }

}



export default Celebrities