import React, { Component } from 'react';
import contacts from '../contacts.json';
import CelebrityDetail from './CelebrityDetail';
import './CelebrityDetail.css'

export default class Celebrities extends Component {
  state = {
    celebrityList: contacts.slice(0, 5),
  };

  handleRandom = () => {
    let newCelebrityList = [...this.state.celebrityList]; //clone
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomContact);
    newCelebrityList.push(randomContact);
    this.setState({
      celebrityList: newCelebrityList,
    });
  };

  handleSortName = () => {
    let cloneCelebrity = [...this.state.celebrityList];
    cloneCelebrity.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      celebrityList: cloneCelebrity,
    });
  };

  handleSortPopularity = () => {
    let cloneCelebPop = [...this.state.celebrityList];
    cloneCelebPop.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      celebrityList: cloneCelebPop,
    });
  };

  handleDelete = (someId) => {
    let filteredCelebrities = this.state.celebrityList.filter((celebrity) => {
      return celebrity.id !== someId;
    });
    this.setState({
      celebrityList: filteredCelebrities,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRandom}>Add Random Celebrity</button>
        <button onClick={this.handleSortName}>Sort By Name</button>
        <button onClick={this.handleSortPopularity}>Sort By Popularity</button>

        {this.state.celebrityList.map((celebrity, i) => {
          return (
            <div key={i}>
              <CelebrityDetail
                key={celebrity.id}
                detail={celebrity}
                deleteHandler={this.handleDelete}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
