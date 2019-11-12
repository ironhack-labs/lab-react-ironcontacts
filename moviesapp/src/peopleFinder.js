import React from 'react';
import peopleList from '../src/contact.json'
import NewPerson from '../src/newPerson';


class PeopleList extends React.Component{

    constructor(props){
        super(props);

        let cloneList = [...peopleList].splice(0,5)

        this.state = {
            person: cloneList,
            nameToggle: false,
            popularityToggle: false
        }
    }

    addPerson = () => {
        let tempClone = [...peopleList];
        let replacement = [...this.state.person]
        let randomPerson = Math.floor(Math.random()*tempClone.length)
        let notFound = true;

        let tempPerson = tempClone[randomPerson];
        console.log(tempPerson)

        console.log(replacement.indexOf(tempPerson))

        if(tempClone.length !== replacement.length){
            while(notFound){
                if(replacement.indexOf(tempPerson) === -1){
                    replacement.unshift(tempClone[randomPerson])
                    notFound = false;
                    this.setState({
                        person: replacement
                    })
                }
                randomPerson = Math.floor(Math.random()*tempClone.length)
                tempPerson = tempClone[randomPerson];
            }
        }


        // for(randomPerson in tempClone){
        //     console.log(tempClone[randomPerson])
        //     if(!replacement[randomPerson]){
        //         replacement.unshift(tempClone[randomPerson]);
        //         console.log(replacement)
        //         console.log(this.state.person)
        //         
        //         return;
        //     }
        // }
    }

    sortPop = () =>{
        let tempClone = [...this.state.person]
        console.log('working')

        if(this.state.popularityToggle){
            tempClone.sort(function(a, b){
                console.log(a, b)
                if(a.popularity > b.popularity){
                    return 1;
                }
                else if(a.popularity < b.popularity){
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }else{
            tempClone.sort(function(a, b){
                console.log(a, b)
                if(a.popularity < b.popularity){
                    return 1;
                }
                else if(a.popularity > b.popularity){
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }

        this.setState({
            person: tempClone,
            popularityToggle: !this.state.popularityToggle
        })
    }

    sortName = () =>{
        let tempClone = [...this.state.person]

        if(this.state.nameToggle){
            tempClone.sort(function(a, b){
                console.log(a, b)
                if(a.name > b.name){
                    return 1;
                }
                else if(a.name < b.name){
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }else{
            tempClone.sort(function(a, b){
                console.log(a, b)
                if(a.name < b.name){
                    return 1;
                }
                else if(a.name > b.name){
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }

        this.setState({
            person: tempClone,
            nameToggle: !this.state.nameToggle
        })
    }

    showPerson = () =>{
        return this.state.person.map((eachPerson,i)=>{
            return(
            <NewPerson
             key={i}
             thePerson = {eachPerson}
             deletePerson = {()=>{this.deletePerson(i)}}
             alt = "person"
              />
            )
        })
    }

    deletePerson = (i) =>{
        let tempClone = [...this.state.person];

        tempClone.splice(0, i+1)

        this.setState({
            person: tempClone
        })
    }


render(){

    return(
        <div>
            <button onClick={this.addPerson}>Add</button>
            <button onClick={this.sortName}>SortName</button>
            <button onClick={this.sortPop}>SortPop</button>
            <thead>
        <tr>
            <th className="top">
                Picture
            </th>
            <th className="top">
                Name
            </th>
            <th className="top">
                Popularity
            </th>
        </tr>
        </thead>
           {/* <NewPerson /> */}
            {this.showPerson()}
        </div>
    )
}



}

export default PeopleList;