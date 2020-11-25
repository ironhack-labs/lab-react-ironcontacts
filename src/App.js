import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <div>
        <table class="egt">
          <tr>
            <td>Celda 1</td>

            <td>Celda 2</td>

            <td>Celda 3</td>
          </tr>

          <tr>
            <td>Celda 4</td>

            <td>Celda 5</td>

            <td>Celda 6</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
