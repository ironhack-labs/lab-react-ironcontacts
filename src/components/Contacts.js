import React,  { useState } from 'react'
import contacts from './../contacts.json'



const Contacts = (props) => {
//---------------------------HOOKS--------------------------------
    const allContacts = props.contacts
    const fiveCont = allContacts.slice(0,5) 
    const [dataCont, setDataCont] = useState(fiveCont)

   /*  console.log(fiveCont)
    console.log(allContacts) */
    const randomCont = allContacts[Math.floor(Math.random() * 53)]

    console.log(randomCont)

    //------------------------FUNCTION--------------------------------    
    const randomContact = (e) => {
        e.preventDefault()
        setDataCont([
            ...dataCont,
            randomCont
        ])

    }

   

    

    
    return (
        <>
        
             <button onClick={() => randomContact()}>CLICK</button> 
             {
                dataCont.map(e => {
                return (
                <div key={e.id} className="p-5">
                <div className="lg:flex">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
                </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">
                        {e.name}
                        </div>
                    </div>
                        <div className="flex items-center">
                            <img className="w-20 h-23 mr-4" src={e.pictureUrl} alt="Avatar of Writer"/>
                        <div className="text-sm">
                            <p className="text-gray-600"><strong>Popularity:</strong>{e.popularity}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            )})
        }
        </>
    )
}



export default Contacts


