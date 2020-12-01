import React, { Component } from 'react'
import contacts from './../../contacts.json';
import Celebrities from './../celebritieslist/Celebrities'


class Contacts extends Component {

    constructor() {
        super()
        this.state = {
         celebrities: [...contacts].slice(0, 5)
        }
    }



    addCelebrity = CelebritiesIdAdd => {

        let randomCharacter=contacts[Math.floor(Math.random()*contacts.length)]
        const celebritiesCopy= [...this.state.celebrities]
       if(!celebritiesCopy.includes(randomCharacter)){celebritiesCopy.push(randomCharacter)}
      
      this.setState({
      celebrities: celebritiesCopy
      })
  }

  sortName = sortByName=> {
    const celebritiesCopy= [...this.state.celebrities]
   let celebritiesCopy2= celebritiesCopy.sort(function (a, b) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  this.setState({
    celebrities: celebritiesCopy2
    })
  }

  sortPopularity = sortByPopularity=> {
    const celebritiesCopy= [...this.state.celebrities]
   let celebritiesCopy2= celebritiesCopy.sort(function(a,b){return b.popularity - a.popularity;});
  
  this.setState({
    celebrities: celebritiesCopy2
    })
  }


  removeCelebrity = celebrityIdToDelete => {
 
    this.setState({
      celebrities: this.state.celebrities.filter(elm => elm.id != celebrityIdToDelete)
    })
}



    render() {
      
        return (
            <section>
              <h1>IronContacts</h1>
              <div className='buttons' >
              <button className='add' onClick={this.addCelebrity}>Add random Celebrity</button>
              <button className='sortName' onClick={this.sortName}>Sort by name</button>
              <button className='sortpopu' onClick={this.sortPopularity}>Sort by Popularity</button>
              </div>
              <section className='section1'>
                <div>
                  <h3>Picture</h3>              
                </div>
                <div>
                  <h3>Name</h3>                
                </div>
                <div>
                  <h3>Popularity</h3>               
                </div>
                <div>
                  <h3>Action</h3>
                </div>
              </section>
  {this.state.celebrities.map(elm => <Celebrities key={elm.id} deleteCelebrity={() => this.removeCelebrity(elm.id)} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity}/>)}
  
    </section>
        )
    }
}

export default Contacts

