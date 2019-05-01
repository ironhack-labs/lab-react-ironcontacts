import React from 'react';
import contacts from './contacts.json';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {celebs : this.filterUniques(contacts),
      showCelebs:this.filterUniques(contacts).slice(0,5)};
  }

  filterUniques(celebs){
    let names = [];
    let resultMap = [];
    celebs.map((celeb, idx, arr)=>{
        if(names.indexOf(celeb.name) === -1){
          celeb.popularity = this.round(celeb.popularity, 2);
          resultMap.push(celeb);
          names.push(celeb.name)
        }
    })
    return resultMap;
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  insertRandomCeleb(){
    var x = this.getRandomInt(0, this.state.celebs.length - 1);
    var sliceArr = [...this.state.showCelebs];
    var firstSize = sliceArr.length;
    sliceArr.push(this.state.celebs[x]);
    sliceArr = this.filterUniques(sliceArr);
    var secondSize = sliceArr.length;
    while(secondSize <= firstSize){
      x = this.getRandomInt(0, this.state.celebs.length - 1);
      sliceArr.push(this.state.celebs[x]);
      sliceArr = this.filterUniques(sliceArr);
      secondSize = sliceArr.length;
    }
    this.setState({
      ...this.state,
      showCelebs: sliceArr
    })   
  };


  sortByName(){
    var x = this.getRandomInt(0, this.state.celebs.length - 1);
    var sliceArr = [...this.state.showCelebs];
    sliceArr.sort((a,b)=>{ return a.name.localeCompare(b.name) });
    this.setState({
      ...this.state,
      showCelebs: sliceArr
    }) 

  }

  sortByPopularity(){
    var x = this.getRandomInt(0, this.state.celebs.length - 1);
    var sliceArr = [...this.state.showCelebs];  
    sliceArr.sort((a,b)=>{ return +b.popularity - +a.popularity });
    this.setState({
      ...this.state,
      showCelebs: sliceArr
    }) 
  }

  removeElementById(id){
    var x = this.getRandomInt(0, this.state.celebs.length - 1);
    var sliceArr = [...this.state.showCelebs];  
    sliceArr = sliceArr.filter((a)=>{ return ! a._id === id });
    this.setState({
      ...this.state,
      showCelebs: sliceArr
    }) 
  }

  render() {


    let mappedCelebs =
      this.state.showCelebs.map(celeb => {
        celeb["_id"] = Math.round(Math.random() * 10000000);
        return (
          <React.Fragment>
            <Contact {...celeb} />
          </React.Fragment>
        )
      })



    return (
      <React.Fragment>
        <div className="ContactHead">
          <p>IronContacts</p>
          <div className="HeadButtons">
            <div id="leftButton"><button onClick={() => this.insertRandomCeleb()} >Add Random Contact</button></div>
            <div id="centerButton"><button onClick={()=>{this.sortByName()}}>Sort By Name</button></div>
            <div id="rightButton"><button onClick={()=>{this.sortByPopularity()}}>Sort By Popularity</button></div>
          </div>
          <div className="HeadDetail">
            <div id="leftHead"><p>Picture</p></div>
            <div id="centerHead"><p>Name</p></div>
            <div id="rightHead"><p>Popularity</p></div>
            <div id="actionHead"><p>Action</p></div>
          </div>
        </div>

        {mappedCelebs}
      </React.Fragment>
    );
  }
}

export default App;
