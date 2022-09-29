import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import {useState} from 'react'

function App() {
  const contactsArray = contacts.slice(0,5)
  const [newContactsArray,setNewContactsArray] = useState(contactsArray)
  const addRandomContact = () => {
    const addedArray = [...contacts].sort(() => 0.5 - Math.random()).slice(0,1)
    if((newContactsArray.map(element => element.id)).includes(addedArray[0].id)) { return } else {
      setNewContactsArray([...newContactsArray,addedArray[0]])
    }
  }
  const sortPop = () => {
    const copyArray = [...newContactsArray]
    copyArray.sort((first,second) => {
      return second.popularity - first.popularity})
    setNewContactsArray(copyArray)
  }
  const sortName =() => {
    const copyNameArray = [...newContactsArray]
    copyNameArray.sort((first, second) => {
      if(first.name < second.name) { return -1} else {return 1}
    })
    setNewContactsArray(copyNameArray)
  }
  const deleteContact = (contactId) => {
    const deleteArray = newContactsArray.filter((element => element.id !== contactId))
    setNewContactsArray(deleteArray)
  }
  return (
    <div className="App">
      <div className='title'>
      <h1>IronContacts</h1>
      <div className='buttons'>
      <button onClick={() => addRandomContact() }>Add Random Contact</button>
      <button onClick={() => sortPop()}>Sort by popularity</button>
      <button onClick={() => sortName()}>Sort by name</button>
      </div>
      </div>
      <table className='contactTable'>
        <thead>
          <tr>
            <th className='imageShift'>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
            {newContactsArray.map(element => {
              return (
                <tbody key={element.id}>
                  <tr>
                  <td><img className='contactImage'src={element.pictureUrl}/></td>
                  <td>{element.name}</td>
                  <td>{element.popularity.toFixed(2)}</td>
                  {element.wonOscar ? <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEvklEQVRoge2YW2wUZRTHf2d2t9SG3QohUEyAhxrUKJZdCxWqgLRYI0QNYUk0QS4lJCYEDVEuUYlGE2OMUBMfAEUaHtSiiD6YVChaaquWQrYoRgyhIRIuCpReLPS2c3zoVme3u+3udLo82N/Lzpzzne/8z3xnZnY+GGWUUUa5lUg8Y6B4zXIVNgjqB7Ksvvum/cX7674eETHrdy3m1B8TY803FAkhWhY6tPfzWKcRawgsWl2GaIWghcSI7wtQxwTHIkbcubMELRTls0Dx6u0DYqwngeI1yxGtADoF3eI23Z/WH/nwz35/27ERVG/BN/s/XQVFayf1iPk0om8BmaqyLFT10YF+v9sa2Nc2gMrWE1V730uH2KGIXMCywKOrBWW7oM8D/xYQ1UKCzgTwqPFJemUOjSfs+hgAIWC1x94DBoBxo7UtPbKS56ar6+949pgV4BpAhzc7Jx2iUmGM6ZkUOWy22qMKUJFTAG6z158mXUnTa2h/65yy2qNbyNTavgNZnA5RKaEsifzWWc1RBZii+wEQls1Y/My4dGkbijklpeNFWQoWjRGiCmg8XH4GkUrA5+7J2JRGjYPSZZqbEbyIVDYeLj9j9Q14E5thcxsQFpUX80tKZ8e4e0dSaLwc/qI1c4CNQDiiLYoBBTQeKW9AdTvgNtX86oGFK3Mt7mtOq43D1f6DQEnpnRh6kL4X7ruNR8obYgcPKABArme8DHyDkmO6jLrIVYiafAS5ApC/aGUhplknMAmRSmn2vBJvsCue8dKlE+b4qXO/dLvDAYGZIqy6IzeQvXTOb1ljPL258WKcovVmZmPNhWf9iuyEvr7v6s4MnvxxZ2fSBQBcOdfQfdeUJys63S0ZgswFCr+ov2dyzu0dntyc6yMi/lAol417HpvcaxrzAVPh7eyeaesaqt+JKx4SfA/Ekl9c6jclXAYyD+DV5UcpymtySHYfVSdzeXP/vMiZ1hjqeuF41Z7QUHEJV8DKxabQ5UtNjeVTp+d1mypF569m81TB6WEJjuWNigW0dGTicenW44fK115sCl1OJi7uTZxwsLp3AVxs9tnROCgXmr2RHK7dKWlKdmAwGHR1m7oJYMqEFsc/bKZMaFWATg2/FAwGk+oMSKGAsy1jaxXdDJiP+s8etKFxUBb5mw4AKipbzraMrUk2LpUW6gJOq8iSxx/+dQVwLlWRiVA4/0TRL6sMdAlwWqE72diknkLxaK9noQqVgMfuHBF6xKTE+yDf2QlO6Sa24i3gW5Tn7Mb3I8oGu+JhGAUA+ArYo8rrduMFtnkL2DkcDbZbyErbMVYBu0m+nXpFWO+dxa7h5nakAID2Y8xT+ACYPsTQ3zFY68un1om8w2ohK97Z1Hg7yBuspUR4zTuOPKfEg4MrYCXRDp51x80pHFuBW4XjBbT+wPhEvpbvcXyjwPECxMNDCZNlUOh4Picnu1KLd0wGdcCMBNl+7syicOK9xN0mtINjK9Bez8LMDKpJJB5Auf+2G1S3/8QjTuW1vQJtx7lbwiwwhfkCC4BU91MvK1QbylF1Ue3Lx9YXkq0C2urZh7DCTuwgSvb5ZrEy1TB7LSQssxU32JRqb057BSg7SOE/exJ0m8IOB+cbZZT/Df8Awx12H3601EMAAAAASUVORK5CYII="/></td> : <td></td>}
                  {element.wonEmmy ? <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEvklEQVRoge2YW2wUZRTHf2d2t9SG3QohUEyAhxrUKJZdCxWqgLRYI0QNYUk0QS4lJCYEDVEuUYlGE2OMUBMfAEUaHtSiiD6YVChaaquWQrYoRgyhIRIuCpReLPS2c3zoVme3u+3udLo82N/Lzpzzne/8z3xnZnY+GGWUUUa5lUg8Y6B4zXIVNgjqB7Ksvvum/cX7674eETHrdy3m1B8TY803FAkhWhY6tPfzWKcRawgsWl2GaIWghcSI7wtQxwTHIkbcubMELRTls0Dx6u0DYqwngeI1yxGtADoF3eI23Z/WH/nwz35/27ERVG/BN/s/XQVFayf1iPk0om8BmaqyLFT10YF+v9sa2Nc2gMrWE1V730uH2KGIXMCywKOrBWW7oM8D/xYQ1UKCzgTwqPFJemUOjSfs+hgAIWC1x94DBoBxo7UtPbKS56ar6+949pgV4BpAhzc7Jx2iUmGM6ZkUOWy22qMKUJFTAG6z158mXUnTa2h/65yy2qNbyNTavgNZnA5RKaEsifzWWc1RBZii+wEQls1Y/My4dGkbijklpeNFWQoWjRGiCmg8XH4GkUrA5+7J2JRGjYPSZZqbEbyIVDYeLj9j9Q14E5thcxsQFpUX80tKZ8e4e0dSaLwc/qI1c4CNQDiiLYoBBTQeKW9AdTvgNtX86oGFK3Mt7mtOq43D1f6DQEnpnRh6kL4X7ruNR8obYgcPKABArme8DHyDkmO6jLrIVYiafAS5ApC/aGUhplknMAmRSmn2vBJvsCue8dKlE+b4qXO/dLvDAYGZIqy6IzeQvXTOb1ljPL258WKcovVmZmPNhWf9iuyEvr7v6s4MnvxxZ2fSBQBcOdfQfdeUJys63S0ZgswFCr+ov2dyzu0dntyc6yMi/lAol417HpvcaxrzAVPh7eyeaesaqt+JKx4SfA/Ekl9c6jclXAYyD+DV5UcpymtySHYfVSdzeXP/vMiZ1hjqeuF41Z7QUHEJV8DKxabQ5UtNjeVTp+d1mypF569m81TB6WEJjuWNigW0dGTicenW44fK115sCl1OJi7uTZxwsLp3AVxs9tnROCgXmr2RHK7dKWlKdmAwGHR1m7oJYMqEFsc/bKZMaFWATg2/FAwGk+oMSKGAsy1jaxXdDJiP+s8etKFxUBb5mw4AKipbzraMrUk2LpUW6gJOq8iSxx/+dQVwLlWRiVA4/0TRL6sMdAlwWqE72diknkLxaK9noQqVgMfuHBF6xKTE+yDf2QlO6Sa24i3gW5Tn7Mb3I8oGu+JhGAUA+ArYo8rrduMFtnkL2DkcDbZbyErbMVYBu0m+nXpFWO+dxa7h5nakAID2Y8xT+ACYPsTQ3zFY68un1om8w2ohK97Z1Hg7yBuspUR4zTuOPKfEg4MrYCXRDp51x80pHFuBW4XjBbT+wPhEvpbvcXyjwPECxMNDCZNlUOh4Picnu1KLd0wGdcCMBNl+7syicOK9xN0mtINjK9Bez8LMDKpJJB5Auf+2G1S3/8QjTuW1vQJtx7lbwiwwhfkCC4BU91MvK1QbylF1Ue3Lx9YXkq0C2urZh7DCTuwgSvb5ZrEy1TB7LSQssxU32JRqb057BSg7SOE/exJ0m8IOB+cbZZT/Df8Awx12H3601EMAAAAASUVORK5CYII="/></td> : <td></td>}
                  <td><button onClick={() => deleteContact(element.id)}>Delete</button></td>
                  </tr>
                </tbody>
              )
            })}
      </table>
    </div>
  );
}

export default App;
