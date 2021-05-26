import React, {useState} from 'react'
import contacts from './contacts.json'

export default function Contact() {

    const [allContacts, setAllContacts] = useState([
        {
            "name": "Idris Elba",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
            "popularity": 11.622713,
            "id": "11731993-0604-4bee-80d5-67ad845d0a38"
          },
          {
            "name": "Johnny Depp",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
            "popularity": 15.656534,
            "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
          },
          {
            "name": "Monica Bellucci",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
            "popularity": 16.096436,
            "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
          },
          {
            "name": "Gal Gadot",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
            "popularity": 10.049256,
            "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
          },
          {
            "name": "Ian McKellen",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
            "popularity": 10.070132,
            "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
          }
    ])


    let allConts = allContacts.map(e => {
        return (
            <div className='d-flex justify-content-center m-2'>
                <img className='h-100'  style={{width: '100px', height: '100px'}} src={e.pictureUrl} alt=""/>
                <div>
                    <div>{e.name}</div>
                    <div>{e.popularity}</div>
                </div>
            </div>           
        )
    })

    
    //3. crud
    let addContact = () => {
        console.log('add contact clicked')
        
        
        let random = Math.floor(Math.random() * contacts.length)
        setAllContacts([...allContacts, contacts[random]])


        
    }

    const sortName = () => {
        allContacts.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
        })
        setAllContacts([...allContacts])
    }

    const sortPopularity = () => {
        allContacts.sort((a, b) => {
            if(a.popularity < b.popularity) {
                return -1
            }
            if(a.popularity > b.popularity){
                return 1
            }
            return 0
        })
        setAllContacts([...allContacts])
    }

    const deleteContact = (id) => {
        console.log(id)
        const filteredArray = allContacts.filter(item => {
            return id !== item.id
        })
        setAllContacts(filteredArray)
    }

    console.log(contacts)

    //return
    return (
        <div>
            {/* formulario */}

            <button onClick={() => addContact()}>Add Random Contact</button>
            <button onClick={() => sortName()}>Sort Name</button>
            <button onClick={() => sortPopularity()}>Sort Popularity</button>


            {allContacts.map(e => {
                return (
                    <div className='d-flex justify-content-center m-2'>
                        <img className='h-100'  style={{width: '100px', height: '100px'}} src={e.pictureUrl} alt=""/>
                        <div>
                            <div>{e.name}</div>
                            <div>{e.popularity}</div>
                        </div>
                        <button onClick={() => deleteContact(e.id)}>Delete</button>
                    </div>           
                )
            })}
           
        </div>
    )
}

