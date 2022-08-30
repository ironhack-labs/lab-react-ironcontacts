import './Table.styles.css'

export const Table = (props) => {
    const { array } = props

    return (
        <table className="table">
            {array.map((key, index) => {
                return (
                    (index === 0 ?
                        <tr key={`${key}_${index}`}>
                            {Object.keys(key).map((tableTitles) => {
                               if(tableTitles === "pictureUrl"){
                                 return (
                                  <th key={`${tableTitles} ${index}`}>
                                      Picture
                                  </th>)
                                }else{
                                return (
                                    <th key={`${tableTitles} ${index}`}>
                                        {tableTitles.charAt(0).toUpperCase() + tableTitles.slice(1)}
                                    </th>)}
                            })
                            }</tr> :
                        <></>
                    )
                )
            })}
            {array.map((val, index) => {
                return (
                    <tr key={`${val}_${index}`}>
                        {Object.values(val).map((tableValues) => {
                           if(typeof tableValues === 'string' && tableValues.includes("https")){
                               return(
                               <td key={array.id}>
                                   <img src={tableValues} alt={tableValues}/>
                               </td>
                               )
                           }else if(typeof tableValues === 'number'){
                            tableValues = tableValues.toFixed(2)
                            
                           }else if(typeof tableValues === 'boolean'){
                            return(
                             <>
                              <td key={array.id}>
                                {tableValues === true ? "🏆" : "No"}
                              </td>  
                             </>
                            )} 
                            return (
                                <td key={array.id}>
                                    {tableValues}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </table>
    );
}