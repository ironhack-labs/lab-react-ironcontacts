import { useState } from "react";
import "./App.css";
import { Fragment } from "react";
import contacts from "./contacts.json";

function ListComponents() {
  const [listContacts, setListContacts] = useState(contacts.slice(0, 5));

  function AddNewContact() {
    const newContact = {
      contacts,
    };

    const newArr = [...contacts];
    newArr.unshift(newContact);

    setListContacts(newArr);
  }

  return (
    <div>
      <button onClick={AddNewContact}>Add Random Contact</button>
      {listContacts.map((contact, index) => {
        return (
          <Fragment key={index}>
            <table>
              <tbody>
                <tr>
                  Picture
                  <br />
                  <img
                    style={{ width: "10%" }}
                    src={contact.pictureUrl}
                    alt=""
                  />
                </tr>
                <tr>name: {contact.name}</tr>
                <tr>Popularity{contact.popularity}</tr>
              </tbody>
            </table>
          </Fragment>
        );
      })}
    </div>
  );
}
function App() {
  return (
    <div>
      <ListComponents />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";
// import { Fragment } from "react";
// import contacts from "./contacts.json";

// function App() {
//   const [listContacts, setListContacts] = useState(contacts.slice(0, 5));

//   return (
//     <div>
//       {listContacts.map((contact, index) => {
//         return (
//           <Fragment key={index}>
//             <table>
//               <tr>
//                 {" "}
//                 Picture
//                 <br />
//                 <img style={{ width: "10%" }} src={contact.pictureUrl} alt="" />
//               </tr>
//               <tr>name: {contact.name}</tr>
//               <tr>Popularity{contact.popularity}</tr>
//             </table>
//           </Fragment>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
