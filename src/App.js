
import './App.css';
import ActorsList from './contacts.json'
import ActorsDetails from './components/ActorsDetails';

function App() {

  console.log(ActorsList)

  

  return (
    <div className="App">
    
     <ActorsDetails />
   
    </div>
  );
}

export default App;
