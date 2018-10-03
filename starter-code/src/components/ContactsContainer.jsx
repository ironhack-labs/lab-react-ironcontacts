import React,{Component} from 'react'
import ContactsDisplay from './ContactsDisplay'
import contactos from '../contacts.json'


class ContactsContainer extends Component{
    
    constructor(){
        super()
        let con=[]
        for(let i=0; i<5;i++){
            con.push({...contactos[i]})
        }
        
        this.state={
            con
        }
       console.log(this.state.con)
    }
    

    delete (index){
        const copy = [this.state.con]
        copy.splice(index,1)
        this.setState({
            con:copy
        })
    }

    
    
    render(){
        //console.log(con)
        //const {contacts} = this.state
        return(
            <div>
                <h1>Ironcontacts</h1>
                <table margin="0 auto">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.con.map((e,i)=><ContactsDisplay key={e.name} name={e.name} {...e} delete={()=>this.delete(i)}  />)}
                    </tbody>
                </table>
               
            </div>
        )
    }
}

export default ContactsContainer