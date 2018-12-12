import React,{Component} from 'react'
import Element from './Element'
import contacts from '../contacts.json'

class Table extends Component{
    // Data component will use
    state = {
        items:[]
    }

    //functions that run prev the component is ready
    componentWillMount() {
        function getFive(arr) {
            let newArr = []
            for(let i=0; i<5; i++){
                newArr.push(arr[i])
            }
            console.log(newArr)
            return newArr
        }
        this.setState({items:getFive(contacts)})
    }

    addRan = () => {
        let random = contacts[Math.floor(Math.random()*contacts.length)+4]
        let {items} = this.state
        items.push(random)
        this.setState({items})
    }

    render(){
        const {items} = this.state
        const {addRan} = this
        return(
            <div>
                <button onClick={addRan}>Add Random Contact</button>


                <table className="home-promo-cards">
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Popularity</th>
                    </tr>
                    {items.map((item,index)=> <Element key={index} {...item} />)}
                </table>
            </div>
        )
    }
}
export default Table