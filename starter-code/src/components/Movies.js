import React, { Component } from 'react';
import Card from './Card';
import contacts from '../contacts'

class Movies extends Component {
    constructor(){
        super();
        this.state = {
            movies: [contacts],
        }
    }

    render() {
        console.log(this.state.movies);
  
        return (
        <div>
        {    
            this.state.movies((oneMovie, index) => {
                <Card key={index} {...oneMovie} />                          
            })
        
        }
        </div>
        );
    }

}

export default Movies;
