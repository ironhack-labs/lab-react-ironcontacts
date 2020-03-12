import React from "react";

import { Header } from "./components/Header";
import { Table } from "./components/Table";

import "./App.css";

export const App = () => (
  <div>
    <Header />
    <main>
      <Table />
    </main>
  </div>
);
