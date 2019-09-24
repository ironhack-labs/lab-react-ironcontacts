import React, { Component } from 'react'
import contacts from '../contacts.json'
export default class Celeb extends Component {

  constructor(props){
    super(props)
    this.state = {
      showList: contacts.splice(0,5),
      celebPool: contacts.splice(5),
      ascending: true,
    };
  }

  deleteCeleb = (celeb)=>{
    let list = [...this.state.showList]
    list.splice(celeb,1)
    this.setState({
      showList: list,
    })
  }

  printCelebs = () =>{
    return this.state.showList.map((celeb, index) =>{
      return(
        <tr key={index}>
          <td>
            <img style={{width:'100px'}}src={celeb.pictureUrl} alt=""/>
          </td>
          <td>{celeb.name}</td>
          <td>{celeb.popularity}</td>
          <td><button style={deleteStyle} onClick={()=>{this.deleteCeleb(index)}}>Delete</button></td>
        </tr>
      )
    })
  } 

  addRandomCeleb = ()=>{
    let randomNum = Math.floor(Math.random()* this.state.celebPool.length)
    let list = [...this.state.showList];
    let pool = [...this.state.celebPool]
    list.unshift(pool[randomNum])
    pool.splice(randomNum,1)
    
    this.setState({
      showList : list,
      celebPool: pool,
    })
  }

  compare = (a,b)=>{
    let sign = 1;
    if(this.state.ascending){
        sign *= -1;
      this.setState({
        ascending: !this.state.ascending,
      })
    }else{
      sign *= 1;
      this.setState({
        ascending: !this.state.ascending,
      })
    }

    if(a > b){
      return -1 * (sign);
    }else if(b > a){
      return 1 * (sign);
    }else{
      return 0;
    }
  }

  sortCelebs = (sortBy)=>{
    let list = [...this.state.showList];
    if(this.state.ascending){
      list.sort((a,b)=>{
        return this.compare(a[sortBy],b[sortBy]);
      }) 
    }else{
      list.sort((a,b)=>{
        return this.compare(a[sortBy],b[sortBy]);
      })
    }
    this.setState({
      showList : list,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addRandomCeleb} style={style}>Add Random Contact</button>
        <button onClick={()=>{this.sortCelebs('name')}} style={style}>Sort by name</button>
        <button onClick={()=>{this.sortCelebs('popularity')}} style={style}>Sort by popularity</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            {this.printCelebs()}
          </tbody>
        </table>
      </div>
    )
  }
}
const style = {
  height:'30px',
  width:'200px',
  backgroundColor: 'transparent',
  fontSize :'1em',
  fontWeight:'bold',
}

const deleteStyle = {
  backgroundColor: 'transparent',
  fontSize :'0.55em',
  fontWeight:'bold',
}
