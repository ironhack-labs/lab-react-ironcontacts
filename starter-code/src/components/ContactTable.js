import React from "react";
import { Table, Button } from "antd";

export default function ContactTable(props) {
	const { contacts, removeContact } = props;
	const columns = [
		{
			title: "Picture",
			dataIndex: "pictureUrl",
			key: "pictureUrl",
			render: (pictureUrl, name) => <img style={{ height: "80px" }} src={pictureUrl} alt={name} />
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: name => <b>{name}</b>
		},
		{
			title: "Popularity",
			dataIndex: "popularity",
			key: "popularity",
			render: popularity => <b>{parseFloat(popularity).toFixed(2)}</b>
		},
		{
			title: "Action",
			dataIndex: "id",
			key: "id",
			render: id => (
				<Button type="link" onClick={() => removeContact(id)}>
					Delete
				</Button>
			)
		}
	];
	return <Table bordered={false} rowKey={record => record.id} dataSource={contacts} columns={columns} />;
}
