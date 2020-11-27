import './App.css';
import React, { useState } from 'react';
import dataSource from './contacts.json';
import { Table,Button } from 'antd';


const fFive= dataSource.slice(0,5)
const rest= dataSource.slice(5)






function App() {
  const [data, setData]= useState(fFive)

  function addRandom(){
    const randomIndex = Math.floor(Math.random()*rest.length)
    setData([...data,rest[randomIndex]])
    rest.splice(randomIndex,1)
  }


  const columns=[
    {
      title:"Name",
      dataIndex:"name",
      width:150,
    },
    {
      title: "pictureUrl",
      dataIndex: "pictureUrl",
      width: 150,
      render:(image) => 
        <img src= {image} style={{ width: "30px"}}/>
      },
      {
        title:"popularity",
        dataIndex:"popularity"
      },
      {
        title:"id",
        dataIndex: "id"
      }
  ]

  return (
    <div className="App">
      <table
        columns ={columns}
        datasource = {data}
        pagination = {{ pageSize: 50}}
        />
        <Button block type="primary" onClick={addRandom}>Add random</Button>
    </div>
  );
}

export default App;
