import React from 'react';

const Table = ({ headers, data, deleteContact }) => {
    const displayHeaders = tableHeaders => {
        return tableHeaders.map((header, idx) => <th key={idx+1}>{header}</th>);
    };

    const displayData = tableData => {
      return tableData.map((data, idx) => {
          return(
            <tr key={idx}>
                <td><img src={data.pictureUrl} alt={data.name}></img></td>
                <td>{data.name}</td>
                <td>{data.popularity.toFixed(2)}</td>
                <td><button onClick={() => deleteContact(data.id)}>Delete</button></td>
            </tr>
          );
      });  
    };

    return(
        <table>
            <thead>
                <tr>
                    {displayHeaders(headers)}
                </tr>
            </thead>
            <tbody>
                    {displayData(data)}
            </tbody>
        </table>
    );
};

export default Table;