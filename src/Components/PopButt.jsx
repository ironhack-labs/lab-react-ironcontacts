let PopButt = (props) => {
    let method=props.method
    let click = () =>{
        let contacts=[...props.contacts]
        let newContacts = [...contacts].sort((a,b) => {
            if (a.popularity > b.popularity){return -1}
            if (a.popularity <b.popularity){return 1}
        })
        method(newContacts)
        console.log (newContacts)

    }

    return(
        <button onClick={click}>Sort by Pop</button>
    )
}

export default PopButt