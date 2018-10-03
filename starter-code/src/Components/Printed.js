import React from 'react';

export class Printed extends React.Component {
    render() {
        let { name, popularity, pictureUrl } = this.props;
        return (
            <tr>
                <td> <img src={pictureUrl} alt="" width="100" height="100" /></td>
                <td>{name}</td>
                <td>{popularity}</td>
            </tr>
        )
    }
};
