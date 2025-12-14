import * as contactSort from '../services/contact-service'; 

function SortContact ({contact, setContactData}) {

    const sortContactPopularity = () => {
        const sortPopularity = contactSort.getContactSortPopularity(contact);

        setContactData([...sortPopularity]);
    };

    const sortContactName = () => {
        const sortName = contactSort.getContactSortName(contact);

        setContactData([...sortName]);
    };

    return (<>
            <button
                type="button" 
                className="btn btn-primary mx-1" 
                onClick={sortContactPopularity}>Sort by Popularity
            </button>
            <button
                type="button" 
                className="btn btn-primary mx-1" 
                onClick={sortContactName}>Sort by Name
            </button>
        </>);
}

export default SortContact;