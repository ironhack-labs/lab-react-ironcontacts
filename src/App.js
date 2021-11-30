
import ActorsList from './actors-list';
import './App.css';
import contacts from "./contacts.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <main>

          <h2>Lista de actores y actrices</h2>
          <ActorsList/>
          
          <contacts />

                  
        </main>


      </header>
    </div>
  );
}

export default App;
