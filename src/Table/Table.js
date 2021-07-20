import {Component} from "react";
import contacts from '../Contacts/Contact'
  
class Table extends Component {
    state = {
        contactsFive: contacts.slice(0 , 5),
    }
    handleAddClick = () => {
      let arrayCopy = [...contacts];
      arrayCopy.splice(0,5);
      let aleatoryIndex = Math.floor(Math.random() * contacts.length)
      let myParcialArray = this.state.contactsFive
        this.setState(
            {
                contactsFive : [...myParcialArray,arrayCopy[aleatoryIndex]]
            }
        )
        arrayCopy.splice(aleatoryIndex,1)
    }
    handleClassificateName = () => {
      let myParcialArray = this.state.contactsFive
      myParcialArray .sort((a , b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      this.setState(
      {
        contactsFive : myParcialArray
      })
    }
    handleClassificatePopularity = () => {
      let myParcialArray = this.state.contactsFive
      myParcialArray .sort((a , b) => {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      })
      this.setState(
      {
        contactsFive : myParcialArray
      })
    }
    render (){
        return (
            <div>
                <button type = 'button' className = 'add-button'  onClick = {this.handleAddClick}>ADD RANDOM CONTACT</button>
                <button type = 'button' className = 'classificate-name' onClick = {this.handleClassificateName}>CLASSIFICATE BY NAME</button>
                <button type = 'button' className = 'classificate-popularity' onClick = {this.handleClassificatePopularity}>CLASSIFICATE BY POPULARITY</button>
                <table className = 'contact-table'>
                  <thead>
                    <tr className = 'cabecalho'>
                      <th className = 'cabecalho-picture'>Picture</th>
                      <th className = 'cabecalho-name'>Name</th>
                      <th className = 'cabecalho-popularity'>Popularity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.contactsFive.map((c) => {
                      return (
                        <tr key = {c.id}>
                          <td className = 'image' ><img src = {c.pictureUrl} className = 'contact-picture'></img></td>
                          <td className = 'name'>{c.name}</td>
                          <td className = 'popularity'>{c.popularity}</td>
                        </tr>
                        )
                      })}
                  </tbody>
        
        
      </table>
            </div>
            
        )
    }
}
export default Table 