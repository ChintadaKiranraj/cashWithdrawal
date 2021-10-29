import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalBalance: 2000}

  getUpdatedAmount = value =>
    this.setState(prevStv => ({totalBalance: prevStv.totalBalance - value}))

  render() {
    const {denominationsList} = this.props
    const {totalBalance} = this.state
    return (
      <div className="mainContainer">
        <div className="cashCard">
          <div className="icon_name">
            <div className="personIcon">
              <p>s</p>
            </div>
            <p className="candidateName">Sarah Williams</p>
          </div>
          <div className="balTitleandbalance">
            <p>Your Balance</p>
            <div>
              {' '}
              <p className="balance">{totalBalance}</p>
              <p>inrupies</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p> CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttonsContainer">
            {denominationsList.map(eachAmt => (
              <DenominationItem
                eachAmt={eachAmt}
                key={eachAmt.id}
                getUpdatedAmount={this.getUpdatedAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
