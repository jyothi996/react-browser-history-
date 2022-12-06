import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteItem} = props
  const {id, title, timeAccessed, domainUrl, logoUrl} = historyItem

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li>
      <div className="list-items">
        <p className="para1">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p className="para1">{title}</p>
        <p className="para2">{domainUrl}</p>
      </div>
      <div>
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
