import React, {Component} from "react"
import Celebrity from "./Celebrity"
import axios from "axios"
import contacts from '../../contacts.json'


class Home extends Component{
  state= {
    pop:[]
  }

  componentWillMount(){
    this.setState({pop: contacts })
  }

  render(){
    const {pop} = this.state
    return(
      <div>
        {pop.map ((celebrity,index)=><Celebrity key={index} {...celebrity}/>)}
      </div>
    )
  }
}

export default Home;