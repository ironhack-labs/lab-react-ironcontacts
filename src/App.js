import './App.css';
import Table from './components/Table/Table';


function App() {
  return (
    <div className="App">
      <div>
        <h1 className='text-center mb-3 mt-5'>IronContacts</h1>
      </div>
      <div className='container'>
        <Table/>
      </div>
    </div>
  );
}

export default App;
