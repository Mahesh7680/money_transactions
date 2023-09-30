import './index.css'

const MoneyDetails = props => {
  const {income, balance, expenses} = props

  return (
    <div className="balance-container">
      <div className="money-details-container box-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">RS {balance}</p>
        </div>
      </div>
      <div className="money-details-container box-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">RS {income}</p>
        </div>
      </div>
      <div className="money-details-container box-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">RS {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
