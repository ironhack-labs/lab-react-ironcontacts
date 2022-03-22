// import Character from "../Character.jsx/Character";
// import ButtonRandom from "../ButtonRandom/ButtonRandom";

// const TableOfCharacters = ({ contacts }) => {

//   return (
//     <div className='card mb-3 mt-4'>
//       <ButtonRandom/>
//       <div className="row my-2 mx-2 " >
//         <div className='d-flex justify-content-center'>
//           <ul>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">Picture</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Popularity</th>
//                   <th scope="col">Won Oscar</th>
//                   <th scope="col">Won Emmy</th>
//                 </tr>
//               </thead>
//               {
//                 contacts.slice(12,21).map(({ id, name, pictureUrl, popularity, wonEmmy, wonOscar }) => (
//                   <Character key={id} 
//                             name={name} 
//                             pictureUrl={pictureUrl} 
//                             popularity={popularity}
//                             wonEmmy={wonEmmy}
//                             wonOscar={wonOscar}
//                    />
//                 ))
//               }
//             </table>
//           </ul>
//         </div>
//       </div>
//     </div>

//   );
// };


// export default TableOfCharacters

