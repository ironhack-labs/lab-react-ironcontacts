import "./TableRow.css";

function TableRow({ pictureUrl, name, popularity, wonOscar, wonEmmy }) {
		
	return (
			<tr className="TableRow">
				<td><img src={pictureUrl} alt="img" className="TableRow-img" /></td>
				<td>{name}</td>
				<td>{popularity.toFixed(2)}</td>
				<td>{wonOscar  ? '🤩' : '😭'}</td>
				<td>{wonEmmy ? '🤩' : '😭'}</td>
			</tr>
		
	);
}

export default TableRow;

// como funcionan los ternarios ? = condicion : = else 
// si ? es verdadero devuelvo veradero : = sino devuelvo falso
// si  la condicion es V = 🤩 el operador devuelve el valor de la expr1 = 🤩
//  de lo contrario devuelve el valor de la expr2 = 😭
// en contactos tenemos x ej "wonOscar": true, "wonEmmy": false
