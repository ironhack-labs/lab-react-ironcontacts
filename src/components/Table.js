import React from "react";

const Table = ( {headers, data}) => {
    const displayHeaders = tableHeaders => {
        return tableHeaders.map((header, idx) => <th key={`table-header-${idx}`}>{header}</th>);
    }

    const displayData = tableData => {
        return tableData.map((data, idx) => {
            return (
                <tr>
                    <td>{data.pictureUrl}</td>
                    <td>{data.Name}</td>
                    <td>{data.popularity}</td>
                </tr>
            );
        });
    };

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
    )

}

export default Table;