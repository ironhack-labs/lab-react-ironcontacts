import '../App.css';

    const Card = ({id,name,pictureUrl,popularity,deleteCard}) => {


        return (
          
           <tr>
               <td><img height = "auto" width = "50px" src = {pictureUrl}/></td>
               <td>{name}</td>
               <td>{popularity.toFixed()}</td>
              <td> <button onClick={ () => {deleteCard(id) }}>REMOVE</button> </td>
           </tr>
          
        );
      };
      


export default Card