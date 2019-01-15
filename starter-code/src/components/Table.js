import React, { Component } from 'react';
import cx from 'classnames';

export const Table = ({headTitles, children}) => {
    const titles = headTitles.split(", ")
    return(
        <table className="table is-bordered">
            <thead>
                <tr>
                    {titles.map((t, i) => <th key={i}>{t}</th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}