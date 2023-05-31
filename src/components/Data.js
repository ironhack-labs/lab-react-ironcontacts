import Contact from "./Contact";

function Data(props) {
    return (
      
  
        <div className="body">          
            <Contact name={props.contacts.name} />
            <Contact name={props.contacts.pictureUrl} />
            <Contact name={props.contacts.popularity} />
            <Contact name={props.contacts.id} />
            <Contact name={props.contacts.wonEmmy} />                       
          </div>               
    );
  }

  export default Data