import React from 'react';
import { Printed } from "./Printed"

export class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <tbody>
                {this.props.data.map((profile) => {
                    return <Printed key={profile.name} name={profile.name} popularity={(profile.popularity).toFixed(2)} pictureUrl={profile.pictureUrl} />
                })}
            </tbody>
        )
    }
}