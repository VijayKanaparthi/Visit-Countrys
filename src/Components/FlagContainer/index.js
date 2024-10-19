import './index.css'

const FlagContainer = props => {
  const {list, removerFunction} = props
  const {id, imageUrl, name, isVisited} = list
  const onClickRemoveButton = () => {
    removerFunction(id)
  }
  return (
    <>
      {isVisited ? (
        <>
          <li className="flag-list">
            <img src={imageUrl} alt="thumbnail" className="visited-image" />
            <div className="card-contents">
              <p>{name}</p>
              <button
                type="button"
                className="remove-button"
                onClick={onClickRemoveButton}
              >
                Remove
              </button>
            </div>
          </li>
        </>
      ) : null}
    </>
  )
}
export default FlagContainer
