


function ButtonAdd({ setNumActors, listContacts, setListContacts, contacts }) {
    const addRandomContact = () => {
        setNumActors(prevNumActors => prevNumActors + 1)//function toma el estado  anterior y le suma 1
        let randomNum = Math.floor(Math.random() * (contacts.length - 5) + 5);
        let newActor = contacts[randomNum];
        const isNewActorIsRep = listContacts.some((actor) => actor.id === newActor.id);//isNewAcorIsRep  true si se da la condicion actor.id === newActor.id 
        if (!isNewActorIsRep) { setListContacts(prevListContacts => [...prevListContacts, newActor]) }
        //si isNewAcorIsRep is false set listContacts add the newActor (use spread ...)
        //spread te crea un nuevo array mas newAcor en esta caso 
    }
    return (
        <div>
            <button onClick={addRandomContact}>Add Random Contacts</button>
        </div>
    );
}
export default ButtonAdd