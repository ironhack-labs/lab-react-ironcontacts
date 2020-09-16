import React from 'react'
import { Table } from 'antd';
import { Button as ButtonAntD } from 'antd';

const TableAntD = (props) => {

    const style = {width:"100px", height:"100px", objectFit:"cover", borderRadius:"10px"}

    const columns = [
        {
          title: 'Picture',
          dataIndex: 'pictureUrl',
          key: 'pictureUrl',
          render: pictureUrl => <img style={style} src={pictureUrl} alt="imagen" ></img>,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <strong>{text}</strong>,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['ascend', 'descend'],
        },
        {
          title: 'Popularity',
          dataIndex: 'popularity',
          key: 'popularity',
          render: text => {return Number(text).toFixed(2).toString()},
          sorter: (a, b) => a.popularity - b.popularity,
          sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Borrar',
            dataIndex: '',
            key: 'id',
            render: (text, record) => (                
                <ButtonAntD type="primary" onClick={ () => props.onDelete(record.id)}>Delete</ButtonAntD>
            ),
          },
      ];

    return (
        <Table key="new" columns={columns} dataSource={props.data} pagination={false} rowKey={"id"}></Table>
    )
}

export default TableAntD
