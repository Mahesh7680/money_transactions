import './index.css'

const TransactionItem = props => {
  const {each} = props
  const {optionId, amountInput, titleInput} = each

  return (
    <div className="history-container">
      <p>{titleInput}</p>
      <p>{amountInput}</p>
      <p>{optionId}</p>
      <img
        alt="delete"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
      />
    </div>
  )
}

export default TransactionItem
