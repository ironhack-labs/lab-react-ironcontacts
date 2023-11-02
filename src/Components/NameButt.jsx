let NameButt = (props) => {
    let method=props.method
    let click = () =>{
        let contacts=[...props.contacts]
        let newContacts = [...contacts].sort((a,b) => {
            if (a.name > b.name){return 1}
            if (a.name <b.name){return -1}
        })
        method(newContacts)
        console.log (newContacts)

    }

    return(
        <button onClick={click}>Sort by Name</button>
    )
}

export default NameButt