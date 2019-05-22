import React from 'react'

const Button = (props) => {

  const addRandom = (arr) => {
    const index = Math.floor((Math.random() * (arr.length-5)) + 5 )
    return arr[index]
  }
  const sortByName = arr => {
    const orgArr = arr.sort((a,b) => {
      const nameA = a.props.contact.name
      const nameB = b.props.contact.name
      if (nameA < nameB){return -1} 
      if (nameA > nameB){return 1}
      else{return 0}
    })
    return orgArr
  }
  
  const buttonPosibility = () => {
    if(props.options === "1"){return addRandom(props.contacts)}
    if(props.options === "2"){return sortByName(props.addedContacts)}
  }

  return (
    <div>
      <button onClick={() => props.function(buttonPosibility())}>{props.children}</button>
    </div>
  )
}

export default Button