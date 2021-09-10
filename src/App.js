import React from 'react';
import './App.css';
import ConcatcsTable from './Components/ContactsTable/ContactsTable';

import Contacts from './contacts.json'

const App = () => {
  const [contactsList, setContacstList] = React.useState(Contacts.slice(0, 5)); 
  const [name, setName] = React.useState('');
  const [pictureUrl, setPictureUrl] = React.useState('');
  const [popularity, setPopularity] = React.useState('');

  const handleCreateContact = (event) => {
    event.preventDefault(); ///para eivtar atualizar a pagina

    ///const para criar o novo contato
    const newContact = {
      id: new Date().getTime(), ///para criar um id automatico
      name: name, ///atuliza a variavel name que ja existe
      pictureUrl: pictureUrl,
      popularity: popularity,
    };

    setContacstList([...contactsList, newContact]); ///metodo chamado Spread (...) para enfiar o new contatc no arry de contact list - equivalente ao push
    setName(''); //para atualizar os campos limpando os dados preenchido - funcao use state que tem que ter sempre
    setPictureUrl('');
    setPopularity('');
  }
  
  return (
    <div className="app">

    <h2>IronContacts</h2>

    <form onSubmit={handleCreateContact} className="create-contact-container">

      <div>
        <input 
        type="text" 
        name="name"
        placeholder="Contact Name" 
        value={name}
        onChange={(Event) => setName(Event.target.value)} //atualizando o estado name com o valor do formulari
        />
      </div>

      <div>
        <input
        type="text" 
        name="pictureUrl" 
        placeholder="PictureUrl" 
        value={pictureUrl}
        onChange={(event) => setPictureUrl(event.target.value)} //atializando o estado da foto
        />
       
      </div>

      <div>
        <input
        type="number"
        step='0.01' 
        name="popularity" 
        placeholder="Popularity"
        value={popularity}
        onChange={(event) => setPopularity(event.target.value)} />
      </div>

      <div>
        <button type="submit">Create new Contact</button>
      </div>

    </form>
    <ConcatcsTable contacts={contactsList}/>
    </div>
  );
}

// const firstFive = Contacts.slice(0, 5);

// const others = Contacts.slice(5);

// const newList = [];
// while (others.length) {
//   const index = Math.floor(Math.random()* others.length - 1)
//   const [option] = others.splice(index, 1);
//   newList.push(option);
// }



// function App() {

// const [contactList, setContactList] = useState(firstFive);
// const [name, setName] = useState('');




//   return (
//     <div className="App">
//     <h1>IronContacts</h1>
//     <button>Add Random Contact</button>

      
//     <table>
//       <tr>
//         <th>Picture</th>
//         <th>Name</th>
//         <th>Populatirty</th>
//       </tr>
//       <tr>
//         <td><img src={firstFive[0].pictureUrl} width="100"></img></td>
//         <td>{firstFive[0].name}</td>
//         <td>{firstFive[0].popularity}</td>
//       </tr>
//       <tr>
//         <td><img src={firstFive[1].pictureUrl} width="100"></img></td>
//         <td>{firstFive[1].name}</td>
//         <td>{firstFive[1].popularity}</td>
//       </tr>
//       <tr>
//         <td><img src={firstFive[2].pictureUrl} width="100"></img></td>
//         <td>{firstFive[2].name}</td>
//         <td>{firstFive[2].popularity}</td>
//       </tr>
//       <tr>
//         <td><img src={firstFive[3].pictureUrl} width="100"></img></td>
//         <td>{firstFive[3].name}</td>
//         <td>{firstFive[3].popularity}</td>
//       </tr>
//       <tr>
//         <td><img src={firstFive[4].pictureUrl} width="100"></img></td>
//         <td>{firstFive[4].name}</td>
//         <td>{firstFive[4].popularity}</td>
//       </tr>
     
//     </table>

    
//     </div>
//   );
// }

export default App;
