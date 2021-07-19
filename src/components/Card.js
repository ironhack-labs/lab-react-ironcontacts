

const Card = ({pictureUrl,name,id,popularity,deletContact})=>{

return (<tr className="Card-row">
        <td><img src={pictureUrl} width="50px" height="auto"alt={name}/></td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td><button onClick={()=>{deletContact(id)}}><img src="https://imagensemoldes.com.br/wp-content/uploads/2020/08/Letra-X-Vermelho-PNG.png" alt="X" width="30px" height="auto"/></button></td>
    </tr>)
}

export default Card