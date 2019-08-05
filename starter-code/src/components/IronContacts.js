import React,{Component} from 'react'
import ProfileCard from './ProfileCard.js';
import {state} from './ProfileCard'

class HomContainer extends Component{

    render(){
        return(
            <div>
                <ProfileCard/>
            </div>
        )
    }
}

export default HomContainer