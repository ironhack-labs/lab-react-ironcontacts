import { list } from './../contacts.json'

const List = ({ name, pictureUrl, popularity }) => {

    return (
        <table>
            <ul>Picture Name Popularity</ul>
            <ul>{pictureUrl} {name} {popularity} </ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
        </table>
    )
}

export default List