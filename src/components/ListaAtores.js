function ListaAtores({ lista }){
    
    return (
    <table>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
            </tr>
        </thead>
        <tbody>
        {lista.splice(0,5).map((ator, index) => {
            console.log(ator.name)
        return <tr key={index}>
                    <td><img src={ator.pictureUrl} alt='Foto Ator'/></td>
                    <td>{ator.name}</td>
                    <td>{ator.popularity.toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
        })}
        </tbody>
    </table>
    )
}
export default ListaAtores;