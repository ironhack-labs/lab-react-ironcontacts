import React, { Component } from 'react';
//import contacts from '../contacts.json';


class ContactsList extends Component {

    constructor() {
        super()
        this.state = {
    

            contacts: [ {
                "name": "Idris Elba",
                "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
                "popularity": 11.622713
              },
              {
                "name": "Jessica Chastain",
                "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
                "popularity": 8.324357
              },
              {
                "name": "Johnny Depp",
                "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
                "popularity": 15.656534
              },
              {
                "name": "Emilia Clarke",
                "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
                "popularity": 16.211837
              },
              {
                "name": "Leonardo DiCaprio",
                "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
                "popularity": 11.245333
              }
            ] 
        }
    }        
     
    // addRandomContact = idx => {

    //     const contactCopy = [...this.state.contacts]
    //     contactCopy.add()

    //     this.setState({
    //         movies: moviesCopy
    //     })
     
render() {
    return ( 
        <div  className = "container">
         <div className='row'>
         <div className="col-sm-4"><img src={this.state.contacts[0].pictureUrl} /></div>
          <div className="col-sm-4">{this.state.contacts[0].name}</div>
         
          <div className="col-sm-4">{this.state.contacts[0].popularity} </div>
          </div>

          <div className='row'>
          <div className="col-sm-4"><img src={this.state.contacts[1].pictureUrl} /></div>
          <div className="col-sm-4">{this.state.contacts[1].name}</div>
       
          <div className="col-sm-4">{this.state.contacts[1].popularity} </div>
          </div>

          <div className='row'>
          <div className="col-sm-4"><img src={this.state.contacts[2].pictureUrl} /></div>
          <div className="col-sm-4">{this.state.contacts[2].name}</div>
       
          <div className="col-sm-4">{this.state.contacts[2].popularity} </div>
          </div>

          <div className='row'>
          <div className="col-sm-4"><img src={this.state.contacts[3].pictureUrl} /></div>
          <div className="col-sm-4">{this.state.contacts[3].name}</div>
       
          <div className="col-sm-4">{this.state.contacts[3].popularity} </div>
          </div>

          <div className='row'>

          <div className="col-sm-4"><img src={this.state.contacts[4].pictureUrl} /></div>
          <div className="col-sm-4">{this.state.contacts[4].name}</div>
       
          <div className="col-sm-4">{this.state.contacts[4].popularity} </div>

        </div>
         </div>
         )
    
}
}
export default ContactsList
