import contacts from './contacts.json'

let five = contacts.splice(0,5)

export const firstFive = contacts.map((name, index) => {
    return <tr>
     <td>{name.name}</td>
     <td>{name.popularity}</td>
     <td><img class="headshot"src={name.pictureUrl}></img></td>
     <td><button onClick={ () => { this.deletecontact(i) } }>Delete</button></td>
    </tr>
  })




