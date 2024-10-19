import './index.css'

const CountrysList = props => {
  const {list, vistCountry} = props
  const {id, isVisited} = list

  const onClcikVisit = () => {
    vistCountry(id)
  }

  return (
    <li className="card">
      <p>{list.name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" className="button" onClick={onClcikVisit}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountrysList
