import './App.css';
import {useEffect, useState} from 'react'

import { Table, Actions } from './components'


function App() {
  const [actors, setActors] = useState([])
  const [actorsSlice, setActorsSlice] = useState([])

  useEffect(() => {
    fetch('contacts.json')
        .then((res) => res.json())
        .then((data) => {
          setActors(data)
          setActorsSlice(data.slice(0, 5))
        })
        .catch((err) => {
          console.log(err.message)
        })
  }, [])

  const  handleClickRandom = () => {
    let lengthActualData = actorsSlice.length
    let myNewData = actors.slice(lengthActualData)
    let myRandomIndex = Math.floor(Math.random() * myNewData.length)
    let myNewContact = myNewData[myRandomIndex]
    const newArray = [...actorsSlice, myNewContact]
    setActorsSlice(newArray)
    
  }

  const handleClickSortPopulatity = () => {
    const newData = [...actorsSlice]
    const sortPop = newData.sort((a, b) => b.popularity - a.popularity)
    setActorsSlice(sortPop)
  }

  const handleClickSortName = () => {
    const newDataSort = [...actorsSlice]
    const sortName = newDataSort.sort((a, b) => a.name.localeCompare(b.name))
    setActorsSlice(sortName)
  }

  const content = [
    {
      nameButton: "Add Random Contact",
      handleClick:() => handleClickRandom(),
    },
    {
      nameButton: "Sort by Popularity",
      handleClick:() => handleClickSortPopulatity()
    },
    {
      nameButton: "Sort by Name",
      handleClick:() => handleClickSortName()
    }
  ]

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Actions buttons={content} /> 
      {actors &&
        <>
          <Table array={actorsSlice} />
        </>
      }
    </div>
  );
}

export default App;
