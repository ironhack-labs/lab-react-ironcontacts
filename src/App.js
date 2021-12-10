import React, { useState } from "react";

import "./App.css";
import Contacts from "./components/Contacts"

const App = () => {
  

  return (
    <>
    <div className="grid place-items-center h-screen box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 text-white px-2">
      <Contacts />
    </div>
    </>
  );
};

export default App;

