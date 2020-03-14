// import React, { Component } from 'react';
// import logo from './logo.svg';


// /* --- STYLING --- */
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';



// /* --- PAGE COMPONENTS --- */
// import contacts from './contacts.json';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


import React from 'react'

/* --- STYLING --- */
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

/* --- UI COMPONENTS --- */
import NavBar from './components/ui/navbar/Navbar'

/* --- PAGE COMPONENTS --- */
import IndexPage from './components/pages/index/IndexPage'
import ArtistPage from './components/pages/artist-index/ArtistIndex'

/* --- RRD COMPONENTS --- */
import { Switch, Route } from 'react-router-dom'



const App = () => {

  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/artists" exact component={ArtistPage} />
      </Switch>

    </>
  )
}

export default App
