import React from 'react'

class SortByName extends React.Component{

    constructor(props){
        super(props) 
    }

    SortByName = () => {
        this.props.sortName()
    }

    render(){
        return(
            <button onClick={()=> this.SortByName()}>SORT BY NAME</button>
        )
    }
}

export default SortByName