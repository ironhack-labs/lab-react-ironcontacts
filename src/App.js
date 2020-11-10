import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json';
import DynamicTable from './components/DynamicTable'

class App extends Component {
 

 
  render() {
    
  return (
   <>
       <DynamicTable/>
   </>
   )
}

}



export default App;
