import React from 'react';
import './App.css';
import contacts from './contacts.json';

const actorsToRender = contacts.slice(0, 5);

class App extends React.Component {
  state = {
    actorsToRender,
  };

  addRandom = () => {
    const randomNum = Math.floor(Math.random() * contacts.length - 1);
    console.log(randomNum);
    let fivePlusOneRandom = actorsToRender.push(contacts[randomNum]);
    this.setState({
      actorsToRender: fivePlusOneRandom,
    });
  };

  sortByName = () => {
    let actorsSortedByName = actorsToRender.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      actorsToRender: actorsSortedByName,
    });
  };

  sortByPopularity = () => {
    let actorsSortedByPopularity = actorsToRender.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    console.log(actorsSortedByPopularity);
    this.setState({
      actorsToRender: actorsSortedByPopularity,
    });
  };

  deleteActor = (actorToDelete) => {
    console.log(actorToDelete);
    let actorsWeDontWantToDelete = actorsToRender.filter((actor) => {
      return actor.name !== actorToDelete;
    });
    console.log(actorsToRender);
    console.log(actorsWeDontWantToDelete);
    this.setState({
      actorsToRender: [],
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>
                <button
                  key={actorsToRender.id}
                  onClick={() => this.addRandom()}
                >
                  Add Random Contact
                </button>
              </th>
              <th>
                <button
                  key={actorsToRender.id}
                  onClick={() => this.sortByName()}
                >
                  Sort by name
                </button>
              </th>
              <th>
                <button
                  key={actorsToRender.id}
                  onClick={() => this.sortByPopularity()}
                >
                  Sort by popularity
                </button>
              </th>
            </tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {actorsToRender.map((contact, index) => {
              return (
                <tr>
                  <td key={actorsToRender.id}>
                    <img
                      style={{ width: '50px' }}
                      key={actorsToRender.id}
                      src={contact.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td key={actorsToRender.name}>{contact.name}</td>
                  <td key={actorsToRender.popularity}>{contact.popularity}</td>
                  <td>
                    <button
                      onClick={() => {
                        return this.deleteActor(contact.name);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function Actors() {
  return <div className="Actors"></div>;
}

export default App;
