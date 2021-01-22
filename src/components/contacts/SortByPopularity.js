import React from 'react'

class SortByPopularity extends React.Component{

    constructor(props){
        super(props) 
    }

    SortByPopularity = () => {
        this.props.sortPopularity()
    }

    render(){
        return(
            <button onClick={()=> this.SortByPopularity()}>SORT BY POPULARITY</button>
        )
    }
}

export default SortByPopularity