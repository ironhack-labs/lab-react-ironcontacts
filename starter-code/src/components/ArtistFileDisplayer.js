import React from 'react';
import ArtistFile from './ArtistFile';

export default class ArtistFileDisplayer extends React.Component {
    render() {
        return (
            <tbody className="artistFileDisplayer">
                {
                    this.props.artistFiles.map((artistFile, idx) =>
                        <ArtistFile
                            pictureUrl={artistFile.pictureUrl}
                            name={artistFile.name}
                            popularity={artistFile.popularity}
                            key={idx}
                        />
                    )
                }
            </tbody>
        )
    }
}