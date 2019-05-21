import React from 'react'

const Button = (props) => {

  const addRandom = (arr) => {
    const index = Math.floor((Math.random() * (arr.length-5)) + 5 )
    return arr[index]
  }
  
  const randomContact = addRandom(props.contacts)

  return (
    <div>
      <button onClick={() => props.addContact(randomContact)}>Add random Contact</button>
    </div>
  )
}

export default Button