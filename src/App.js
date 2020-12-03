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
    let actorsToRenderPlusOneRandom = [
      ...this.state.actorsToRender,
      contacts[randomNum],
    ];
    this.setState({
      actorsToRender: actorsToRenderPlusOneRandom,
    });
  };

  sortByName = () => {
    let actorsSortedByName = this.state.actorsToRender.sort((a, b) => {
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
    let actorsSortedByPopularity = this.state.actorsToRender.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    console.log(actorsSortedByPopularity);
    this.setState({
      actorsToRender: actorsSortedByPopularity,
    });
  };

  deleteActor = (actorToDelete) => {
    console.log(actorToDelete);
    let spreadActors = this.state.actorsToRender;
    let actorsWeDontWantToDelete = spreadActors.filter((actor) => {
      return actor.name !== actorToDelete;
    });
    console.log(actorsWeDontWantToDelete);
    this.setState({ actorsToRender: actorsWeDontWantToDelete });
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.actorsToRender.map((contact, index) => {
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
                      className="delete"
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

export default App;
