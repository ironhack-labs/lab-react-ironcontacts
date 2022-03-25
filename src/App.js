// import logo from './logo.svg';
import './model/App.css';
import React, {Component} from 'react';
import contacts from './contacts.json';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    firstContacts: [...contacts].splice(0,5),
    otherContacts: [...contacts].splice(5, contacts.length),
    sort: " "
  }

  addRandom = () => {
    const {firstContacts, otherContacts} = this.state;

    let contactRandom = otherContacts[Math.floor(Math.random()*otherContacts.lenght)];
    console.log(firstContacts);

    this.setState({
      firstContacts: [contactRandom, ...firstContacts]
    });
    console.log(firstContacts);
  }

  hamdleSortBy = (event) => {
    const {name} = event.target;
    this.setState(prevState => {
      return {
        sort: prevState.sort === name ? '' : name
      }
    })
  }

  sortContacts = () => {
    const {firstContacts, sort} = this.state;
    
    if(sort === 'popularity') {
      return firstContacts.sort((a, b) => {
        if(a.name < b.name) return 1;
        if(b.name < a.name) return -1;
        return 0;
      })
    }

    if(sort === 'popularity') {
      return firstContacts.sort((a, b) => {
        if(a.popilarity < b.popilarity) return 1;
        if(b.popilarity < a.popilarity) return -1;
        return 0;
      })
    }
  }

  deleteContacs =(id) => {
    const{firstContacts} = this.state
    this.setState({firstContacts: firstContacts.filter(contact => contact.id !== id)})
  }

  render(){
    const {firstContacts} = this.state;
    this.sortContacts();

    return(
      <div className='App'>
        <h1>IronContacts</h1>
        <div className='buttons'>
          <button  
            onclick={this.addRandom}>
            Add Random Contact
          </button>
          <button  
            onclick={this.handleSortBy}
            name='name'>
            Sort by name
          </button>
          <button  
            onclick={this.handleSortBy}
            name='popularity'>
            Sort by popularity
          </button>
        </div>

        <table className=''>
          <thead>
            <tr className='me-3'>
              <th scope="col">
                Picture
              </th>
                <th scope="col">
                  Name
                </th>
                <th scope="col">
                  Popularity
                </th>
                <th scope="col">
                  Won an Oscar
                </th>
                <th scope="col">
                  Won an Emmy
                </th>
                <th scope="col"></th>
            </tr>
          </thead>
        
          { this.state.firstContacts.map(({ pictureUrl, name, popularity, wonOscar, wonEmmy, id }) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <img 
                      key={id}
                      value={pictureUrl}
                      className='contact-img'
                      src={pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  <td>
                    {wonOscar && "🏆"}
                  </td>
                  <td>
                    {wonEmmy && "🏆"}
                  </td>
                  <td className="delete-btn">
                    <button
                      className="btn btn-danger"
                      key={id}
                      onClick={() => this.deleteContacts(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            )
          })
        }  
        </table>
      </div>
    )
  }
}

export default App;
