import React from 'react';
import { Profile } from './Components/Profile';



export class Table extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <Profile data={this.props.datab} />
            </table >
        )
    }
}