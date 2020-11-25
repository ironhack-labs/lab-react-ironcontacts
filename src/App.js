import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import dataSource from './contacts.json';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'pictureUrl',
    dataIndex: 'pictureUrl',
    width: 150,
  },
  {
    title: 'popularity',
    dataIndex: 'popularity',
  },
  {
    title: 'id',
    dataIndex: 'id',
  },
];

const data = dataSource;

function App() {
  return (
    <div className="App">
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 240 }}
      />
    </div>
  );
}

export default App;
