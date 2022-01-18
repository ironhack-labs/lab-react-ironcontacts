import React, {useState} from 'react';
import './App.css';
import contacts from "./contacts.json"


function App() {
  const [cts, setCts] = useState(contacts.filter((value,index)=> {return index<5}))
  const [notShownContacts,setNotShownContacts] = useState([...contacts.slice(5)])
 
  const table = cts.map(ct => {
      return (
        <tr key = {ct.id}>
          <td  style={{width:'130px'}} className='td-image'>
            <img src = {ct.pictureUrl} className='image' alt = {ct.name}></img>
          </td>
          <td  style={{width:'130px'}}>
            <p>{ct.name}</p>
          </td>
          <td  style={{width:'130px'}} className='td-rating'> 
            <p>{ct.popularity.toFixed(2)}</p>
          </td>
          <td  style={{width:'130px'}} className='td-action'>
            <button className='button' onClick = {()=>{deleteContacts(ct)}}>Delete</button>
          </td>
        </tr>
      )
    }) 
    //Deleção do contato dos 'cts'
    const deleteContacts = (ct)=>{
      if(notShownContacts.length===0){
        const bton = document.getElementById("add")
          bton.textContent = "Add new contact"
      }
      notShownContacts.push(ct)
      setCts(cts.filter(c => c.id !== ct.id))
      setNotShownContacts([...notShownContacts])
    }
    
    //Adição contato aleatório
    const addRandomContact = ()=>{
      if(notShownContacts.length===0){
        const bton = document.getElementById("add")
        bton.textContent = "No more contacts"
        return
      }
      const rd = Math.round(Math.random()*(notShownContacts.length -1))
      
      cts.push(notShownContacts[rd])
      notShownContacts.splice(rd,1)

      setNotShownContacts([...notShownContacts])
      setCts([...cts])
    }
    //Organização alfabética dos contatos
    const sortByName = ()=>{
      cts.sort((a,b)=>{
        if(a.name < b.name){
          return -1
        }else{
          return 1;
        }
      })
      setCts([...cts])
    }
    //Organização por popularidade > para <
    const sortByPopularity = ()=>{
      cts.sort((a,b)=> b.popularity - a.popularity)
      setCts([...cts])
    }
    //Retorno 
  return (
    <div className='container'>
      <h1>IronContacts</h1>
      <div>
        <div className="buttons">
          <button id= 'add' className= 'button fbutton' onClick = {addRandomContact}>Add new contact</button>
          <button className= 'button fbutton' onClick = {sortByName}>Sort by name</button>
          <button className= 'button fbutton' onClick = {sortByPopularity}>Sort by popularity</button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th style={{width:'130px'}}>Picture</th>
              <th style={{width:'130px'}}>Name</th>
              <th style={{width:'130px'}}>Popularity</th>
              <th style={{width:'130px'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cts.length!==0?table:(
            <tr><td colSpan={4}><h3>Add a contact</h3></td></tr>)} 
          </tbody>
        </table>
      </div> 
    </div>
  )
}

export default App;
