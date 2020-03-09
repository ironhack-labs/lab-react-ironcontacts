import React from "react";

import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import "./App.css";

export const App = () => (
  <div className="App">
    <Header />
    <main>
      <TaskList />
    </main>
  </div>
);
