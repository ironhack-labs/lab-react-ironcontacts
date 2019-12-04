import React from "react";
import "./App.css";
import ListContacts from "./components/listContacts";

function App() {
  return (
    <>
      <section className="App">
        <div className="container col-md-8 text-center  bg-dark text-white">
          <h2 className="">IronContatcs</h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-5  text-dark">
              <ListContacts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
