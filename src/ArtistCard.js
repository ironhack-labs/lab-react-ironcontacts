const ArtistCard = ({ name, pictureUrl, popularity, removeArtist }) => {

    return (
        <tbody>
            <tr><th><img src={pictureUrl}></img></th>

                <th>{name}</th>
                <th>{popularity}</th>
                <th><button onClick={removeArtist}>MUEREEEEEEEEEE MUAJAJAJAAJAJA</button></th>
            </tr>
        </tbody>
    )
}

export default ArtistCard