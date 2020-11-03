import React from 'react';

const Table = ({ headers, data }) => {
  const displayHeaders = tableHeaders => {
    return tableHeaders.map((header, index)=> <th key={`table-header-${index + 1}`} >{header}</th>)
  }; 
  
  const displayData = tableData => {
    return tableData.map((data, index) => {
      return (
        <tr key={`table-data-${index + 1}`}>
          <td>
            <img src={data.pictureUrl} alt={`${data.name} profile`} />
          </td>
          <td>{data.name}</td>
          <td>{data.popularity.toFixed(2)}</td>
      </tr>
      )
    })
  }

  return (
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