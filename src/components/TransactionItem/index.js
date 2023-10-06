import './index.css'

const TransactionItem = props => {
  const {each, onDelete} = props
  const {id, optionId, amountInput, titleInput} = each

  const onDeleteClick = () => {
    onDelete(id)
  }

  return (
    <div className="history-container">
      <p>{titleInput}</p>
      <p>{amountInput}</p>
      <p>{optionId}</p>
      <button type="button" onClick={onDeleteClick}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </div>
  )
}

export default TransactionItem
