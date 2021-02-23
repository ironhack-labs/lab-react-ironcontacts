import 'bulma/css/bulma.css';

const Button = ({ name, action }) => {
    return (

        <button className="button is-small is-success is-rounded" onClick={action}> {name} </button>
    )
}

export default Button