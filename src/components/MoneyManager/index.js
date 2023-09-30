import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionHistoryList: [],
    income: 0,
    balance: 0,
    expenses: 0,
    titleInput: '',
    amountInput: 0,
    optionId: '',
  }

  onAddTitle = e => {
    this.setState({titleInput: e.target.value})
  }

  onAddAmount = e => {
    this.setState({amountInput: e.target.value})
  }

  onPaymentType = e => {
    this.setState({optionId: e.target.value})
  }

  onAddTransaction = e => {
    e.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const transaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }

    this.setState(prevState => ({
      transactionHistoryList: [
        ...prevState.transactionHistoryList,
        transaction,
      ],
      balance: prevState.income - prevState.expenses,
      income: prevState.amountInput - amountInput,
      expenses: prevState.expenses + amountInput,

      titleInput: '',
      amountInput: '',
      optionId: '',
    }))
  }

  render() {
    const {
      transactionHistoryList,
      titleInput,
      amountInput,
      optionId,
      income,
      balance,
      expenses,
    } = this.state
    console.log(transactionHistoryList)

    return (
      <div className="main-container">
        <div className="welcome-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            income={income}
            balance={balance}
            expenses={expenses}
            optionId={optionId}
          />
        </div>
        <form className="last-container" onSubmit={this.onAddTransaction}>
          <div className="add-transactions-container">
            <h1>Add Transaction</h1>
            <div>
              <label htmlFor="titleInputEl">titleInput</label>
              <br />
              <input
                id="titleEl"
                type="text"
                placeholder="Title"
                onChange={this.onAddTitle}
                value={titleInput}
              />
            </div>
            <div>
              <label htmlFor="amountEl">Amount</label>
              <br />
              <input
                id="amountEl"
                type="text"
                placeholder="Amount"
                onChange={this.onAddAmount}
                value={amountInput}
              />
            </div>
            <div>
              <label htmlFor="typeEl">Type</label>
              <br />
              <select id="typeEl" onClick={this.onPaymentType}>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
            </div>
            <br />
            <button type="submit">Add</button>
          </div>
          <div className="add-transactions-container">
            <h1>History</h1>
            <div className="history-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p>{}</p>
            </div>
            <ul className="transactions-container">
              {transactionHistoryList.map(each => (
                <TransactionItem key={each.id} each={each} />
              ))}
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default MoneyManager

// const inputTitle = e.target[0].value
// const amount = parseInt(e.target[1].value)
// const inputType = e.target[2].value
