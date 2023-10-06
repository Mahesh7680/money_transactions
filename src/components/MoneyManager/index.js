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
    amountInput: '',
    optionId: '',
    errorMessage: '',
  }

  onAddTitle = e => {
    this.setState({titleInput: e.target.value})
  }

  onAddAmount = e => {
    this.setState({amountInput: parseInt(e.target.value)})
  }

  onPaymentType = e => {
    this.setState({optionId: e.target.value})
  }

  onAddTransaction = e => {
    e.preventDefault()
    const {
      titleInput,
      amountInput,
      optionId,
      balance,
      income,
      expenses,
    } = this.state
    const transaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }
    if (optionId === 'EXPENSES' && expenses + amountInput > income) {
      console.log('amount greater than income')
      this.setState({
        errorMessage: '* amount should be less than available balance',
      })
    } else {
      this.setState(prevState => ({
        transactionHistoryList: [
          ...prevState.transactionHistoryList,
          transaction,
        ],
        income: prevState.income + (optionId === 'INCOME' ? amountInput : 0),
        expenses:
          prevState.expenses + (optionId === 'EXPENSES' ? amountInput : 0),
        errorMessage: '',
        titleInput: '',
        amountInput: '',
        optionId: '',
      }))
    }
  }

  onDelete = id => {
    this.setState(prevState => ({
      transactionHistoryList: prevState.transactionHistoryList.filter(
        each => each.id !== id && each,
      ),
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
      errorMessage,
    } = this.state

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
                type="number"
                min="1"
                placeholder="Amount"
                onChange={this.onAddAmount}
                value={amountInput}
              />
            </div>
            <div>
              <label htmlFor="typeEl">Type</label>
              <br />
              <select id="typeEl" required onClick={this.onPaymentType}>
                <option required value="INCOME">
                  Income
                </option>
                <option required value="EXPENSES">
                  Expenses
                </option>
              </select>
            </div>
            <br />
            <button type="submit">Add</button>
            <span> {errorMessage}</span>
          </div>
          <div className="add-transactions-container">
            <h1>History</h1>
            <div className="history-container">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p>{}</p>
              <p>{}</p>
            </div>
            <ul className="transactions-container">
              {transactionHistoryList.map(each => (
                <TransactionItem
                  key={each.id}
                  each={each}
                  onDelete={this.onDelete}
                />
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
