import React,{Component} from 'react'
import contacts from '../contacts.json'
import ProfileCard from './ProfileCard.js';


let number = 5
let items = contacts.slice(0,5)
class HomContainer extends Component{
    state={
        loquesea: items
        
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th><h1>Picture</h1></th>
                        <th><h1>Name</h1></th>
                        <th><h1>Popularity</h1></th>
                    </tr>
                    <tr>
                        <td>{ contacts }</td>
                    </tr>
                </table>
            </div>
        )
    }
}
console.log(this.state.loquesea)
export default HomContainer