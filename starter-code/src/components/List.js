import React from 'react'

const List = (props)=>{

    const showElements = (arrayContacts)=>{
       return arrayContacts.map((contact ,i) =>{
            return (
                <tr key={contact.id}>
                    <td ><img src={contact.pictureUrl} alt=""/></td>
                    <td >{contact.name}, </td>
                    <td >{contact.popularity} </td>
                </tr>
            );
        })
    }

    const displayNElements = (listContacts , numElements) =>{
        let contactsList=( listContacts.slice(0,numElements))
        return contactsList
    }
    
    return(
      
        <div className="List">
            <table>
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                </thead>
                <tbody>
                
                   {
                       
                       showElements(displayNElements(props.data , props.elementsDisplay))
                       
                       
                      // displayElements(props.data)
                   }
                
                </tbody>
            </table>
           
            
        </div>
    )

}

export default List;