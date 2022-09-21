import ContactCard from "./ContactCard";
import { v4 as uuid } from "uuid"
import contacts from '../contacts.json';

function ContactCardlist(){


    return(
 <div>
  <h1>IronContacts</h1>

 {
    contacts.map(con=>{
   return <ContactCard key = {uuid()} name = {con.name} pictureUrl = {con.pictureUrl} popularity = {con.popularity} id = {con.id} wonOscar = {con.wonOscar} wonEmmy = {con.wonEmmy} />
 })
 }

 </div>
   )}

   export default ContactCardlist;