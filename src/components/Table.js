import contacts from '../contacts.json';
import {Component} from 'react'
import Card from './Card';



class Table extends Component{
    
    state={
      displayContacts:[contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
    }

    handleAddContact(){
        
        let rnd = Math.floor(Math.random()*contacts.length)
        let alreadyDisplayContacts = [...this.state.displayContacts]

        let checkDisplay = alreadyDisplayContacts.find(element=> element ===contacts[rnd])
        
        if(alreadyDisplayContacts.length !== contacts.length){
        while(checkDisplay){
        rnd = Math.floor(Math.random()*contacts.length)
        checkDisplay = alreadyDisplayContacts.find(element=> element ===contacts[rnd])
            }
            alreadyDisplayContacts.push(contacts[rnd])
            
        this.setState({
            displayContacts:alreadyDisplayContacts
            }
        )
        }else{}
      
    }
    rmvContact=(id)=>{
        const copyArr = [...this.state.displayContacts]

        const index = copyArr.findIndex(element=>element.id===id)
        
        copyArr.splice(index,1)
        console.log(index)

        this.setState({
            displayContacts:copyArr
        })
    }
    sortByName(){
        const copyArr = [...this.state.displayContacts]

        const sortName = copyArr.sort((a,b)=> a.name.localeCompare(b.name))
        

        this.setState({
            displayContacts:sortName
        })
    }
    sortByPopularity(){
        const copyArr = [...this.state.displayContacts]

        const sortPopularity = copyArr.sort((a,b)=> b.popularity - a.popularity)
        

        this.setState({
            displayContacts:sortPopularity
        })
    }


    
   
    render(){
        return (
            <>
            <button onClick={()=>{this.handleAddContact()}}>Add Contact</button>
            <button onClick={()=>{this.sortByName()}}>Sort by Name</button>
            <button onClick={()=>{this.sortByPopularity()}}>Sort by Popularity</button>
                <table cellPadding="40px" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Remove Contact</th>
                        </tr>
                </thead>
                <tbody>
                {this.state.displayContacts.map(element =>
                <Card key={element.id} pictureUrl={element.pictureUrl} name={element.name} popularity={element.popularity} id={element.id} deletContact={this.rmvContact}/>
                
                )}
                </tbody>
                </table>  
                </>
            )
    }
}

export default Table;


// <tr key={element.id}>
//             <td><img src={element.pictureUrl} width="50px" height="auto"alt={element.name}/></td>
//             <td>{element.name}</td>
//             <td>{element.popularity}</td>
//         </tr>
            