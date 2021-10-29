// Write your code here

import './index.css'

const DenominationItem = props => {
  const {eachAmt, getUpdatedAmount} = props
  const {value} = eachAmt

  const amountClicked = () => {
    getUpdatedAmount(value)
  }

  return (
    <li>
      <button type="button" className="buttons" onClick={amountClicked}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
