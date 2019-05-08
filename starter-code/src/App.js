import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import { Layout, Menu, Card, Icon, Avatar, Row, Col} from 'antd';
const { Meta } = Card;

class App extends Component { 
  state = {
    contactsCopy: contacts.slice(0, 5),
    
  }

  randomCeleb = () => {
    let randomCelebrity = contacts[Math.floor(contacts.length * Math.random())]
    let copy = this.state.contactsCopy
    let allCeleb = copy
    allCeleb.push(randomCelebrity)
    this.setState({contactsCopy: allCeleb})    
  }

  sortByName = () => {
    let copy = this.state.contactsCopy
    const sortedCeleb = copy.sort((a,b) => (a.name < b.name ? -1 : 1))
    this.setState({contactsCopy: sortedCeleb})
  }

  sortByPopularity = () => {
    let copy = this.state.contactsCopy
    const sortedCeleb = copy.sort((a,b) => (a.popularity < b.popularity ? 1 : -1))
    this.setState({contactsCopy: sortedCeleb})
  }

  deleteCeleb = (celebIndex) => {
    let copy = this.state.contactsCopy
    copy.splice(celebIndex, 1)
    this.setState({ contactsCopy: copy })
  }

   render() {
     const {contactsCopy} = this.state
      return (
        <div className="App" style={{backgroundImage: 'url("https://www.cheatersutopia.com/img/p29fnJEvLJAeM3WiqJ5xpl5wo20inJ1uM2ImYmDjBGM4ZwZjAP80ZQx2rQVmZQDgpTyaM3xgpTyhnl1mo2kcMP1wo2kipv1vLJAeM3WiqJ5xYzcjMj/solid-light-pink-background-tumblr-images-free-download.jpg")'}}>
          <h1>Celebrities List</h1>
          <button onClick={this.randomCeleb}>Add random celebrity</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          {contactsCopy.map((celeb, index) =>
            <div style={{marginLeft: '47%', marginTop: '3%', diplay: 'flex'}}>
              <Card key={index} style={{ width: 100 }} cover={<img alt="example" src={celeb.pictureUrl} width="100" />} actions={[ <Icon type="delete" onClick={() => this.deleteCeleb(index)} />]} >
                <Meta title={celeb.name} description={celeb.popularity}/>
              </Card>
            </div>
            ) }
        </div>
      )

    }
}

export default App