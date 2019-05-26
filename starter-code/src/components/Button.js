import React from 'react'

const Button = (props) => {

  //Definimos diferentes estados para botones
  const buttonStates = () => {
    if (props.buttonState === "1"){return addRandom(props.contacts)}
    if (props.buttonState === "2"){return FilterByName(props.addContacts)}
    if (props.buttonState === "3"){return FilterByPopularity(props.addContacts)}
    if (props.buttonState === "4"){return DeleteContact(props.addContacts)}
  }


  const addRandom = (arr) => {
    const index = Math.floor((Math.random() * (arr.length-5)) + 5 )
    return arr[index]
  }

  
//Iteración filtrar por nombre
  const FilterByName = arr => {
    const filterArray = arr.sort((a,b) => {
      const nameA = a.props.contact.name
      const nameB = b.props.contact.name
      if (nameA < nameB){return -1} 
      if (nameA > nameB){return 1}
      else{return 0}
      })
    return filterArray
  }

//Iteración filtrar por popularidad
  const FilterByPopularity = arr => {
    const filterArray = arr.sort((a,b) => {
    const popA = a.props.contact.popularity
    const popB = b.props.contact.popularity
    return popB - popA 
    })
    return filterArray
  }
  
  //Eliminar contacto
  const DeleteContact = (index) => {
    const removeContact = this.state.firstContacts
    removeContact.splice(index, 1)
    this.setState({ firstContacts: removeContact })
  }
 
  

  return (
    <div className="Button">
      <button onClick={() => props.function(buttonStates())}>{props.children}</button>
    </div>
  )
}

export default Button