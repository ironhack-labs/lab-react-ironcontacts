function ListaAtores({ lista, deletar }){
    
    return (
    <table>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {lista.map((ator) => {
            
        return <tr key={ator.id}>
        
                    <td><img src={ator.pictureUrl} alt='Foto Ator'/></td>
                    <td>{ator.name}</td>
                    <td>{ator.popularity.toFixed(2)}</td>
                    <td>{ator.wonOscar && <p>🏆</p>}</td>
                    <td>{ator.wonEmmy && <p>🏆</p>}</td>
                    <td><button onClick={() => deletar(ator.id)}>Deletar</button></td>
                </tr>
        })}
        </tbody>
    </table>
    )
}
export default ListaAtores;