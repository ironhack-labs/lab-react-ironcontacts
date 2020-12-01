import './Table.css'

const Table = ({ content }) => {
  return (
    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        { content }
        </tbody>
      </table>
  )
}

export default Table