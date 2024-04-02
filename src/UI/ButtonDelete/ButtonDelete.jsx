function ButtonDelete ({setNumActors, listContacts, setListContacts,id}){


    const deleteContact = () => {
      setNumActors(numActors => numActors - 1);
      const updateContacts = listContacts.filter(actor => actor.id  !== id );
     
  
     
  
      setListContacts(updateContacts)
      console.log(id)
  
      
  
    }
  
  
    return(
      <button onClick={deleteContact}>
        Delete
  
      </button>
    )
  }

export default ButtonDelete