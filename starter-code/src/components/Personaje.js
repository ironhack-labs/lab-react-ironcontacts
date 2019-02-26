import React from "react";
import { Table, Button } from "antd";

export default function({ dataSource, onClick }) {
  const columns = [
    {
      title: "Picture",
      dataIndex: "pictureUrl",
      key: "picture",
      render: pic => <img src={pic} height="60px" />
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Popularity",
      dataIndex: "popularity",
      key: "popularity"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (action,obj, i) => <Button onClick={()=>onClick(i)}>Delete</Button>
    }
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="name" />
    </div>
  );
}
