import actorsData from "../contacts.json";
import { useState } from "react";
import Button from "./Button";

const Actors = () => {
    const [allActors, setAllActors] = useState(actorsData.slice(5))
    const [actors, setActors] = useState(actorsData.slice(0, 5))


    const AddRandomActor = () => {
        // Saco un indice aleatorio de los disponibles del array de recetas restantes
        if (allActors.length === 0) {
            return alert('No hay más actores en la base de datos');
        }

        const randomIndex = Math.floor(Math.random() * allActors.length)
        setAllActors(allActors.filter((actor, index) => index !== randomIndex));

        const itemToAdd = allActors[randomIndex];
        setActors([itemToAdd, ...actors])
    }

    const onDelete = (id) => {
        // Actualizar el estado borrando el elemento que tiene ese id
        // Filter me devuelve un nuevo array eliminando los que no cumplan la condición
        // La condicion sera todos los que no tengan este id

        const DeleteArr = actors.filter((actor) => {
          return actor.id !== id
        })

        setActors(DeleteArr);
      }

const orderByName = () => {

    const OrderNameArr = [...actors].sort((name1, name2) => {
        return name1.name.localeCompare(name2.name)
    })

    setActors(OrderNameArr)
}

const orderByRate = () => {
    const OrderRateArr = [...actors].sort((rate1, rate2) => {
        return rate2.popularity - rate1.popularity;
    })
console.log(OrderRateArr,"-----------------------------");
    setActors(OrderRateArr)
}

    return (
        <div className="d-flex justify-content-colum">

            <table className="table aling">
                <Button type="success" onClick={AddRandomActor} disabled={allActors.length === 0}>Add new Actor</Button>

                <Button type="success" onClick={orderByName} disabled={actors.length === 0}>Sort by Name</Button>
                
                <Button type="success" onClick={orderByRate} disabled={actors.length === 0}>Sort by Popularity</Button>
                
                <tbody>
                    <tr className="d-flex justify-content-center">
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                        <th>Actions</th>
                    </tr>
                </tbody>
                {actors.map((actor) => (

                    <tbody key={actor.id}>
                        <tr className="d-flex justify-content-center">
                            <th scope="row" className="">
                                <img src={actor.pictureUrl} className="w-25 h-75" alt="{actor.name}" />
                            </th>
                            <td scope="col"> <p className="card-title">{actor.name}</p></td>
                            <td scope="col"><p className="card-text">{actor.popularity}</p></td>
                            <td scope="col"><p className="card-text">{actor.wonOscar ? "🏆" : ""}</p></td>
                            <td scope="col"><p className="card-text">{actor.wonEmmy ? "🌟" : ""}</p></td>
                            <td><Button onClick={() => onDelete(actor.id)}>Delete</Button></td>
                        </tr>
                    </tbody>


                ))}
            </table>
        </div>


    )
}

export default Actors;