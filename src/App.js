import React, { useState } from 'react'
import './App.css'

import DoughnutChart from './Component/DoughnutChart'
import BarChart from './Component/BarChart'
import InvestmentForm from './Component/form'

function App() {
  const [amount, setAmount] = useState([])
  const [profitLossData, setProfitlossData] = useState([])

  const handleSubmit = formValues => {
    setAmount([...amount, { y: formValues.amountInvested, label: formValues.fundName }])
    setProfitlossData([
      ...profitLossData,
      { y: formValues.currentvalue - formValues.amountInvested, label: formValues.fundName },
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <InvestmentForm onSubmit={handleSubmit} />
        {/* {amount.length > 0 && ( */}
        <div className={amount.length > 0 ? 'graph-show' : 'graph-hidden'}>
          <DoughnutChart dataPoints={amount} />
          <BarChart dataPoints={profitLossData} />
        </div>
        {/* )} */}
      </header>
    </div>
  )
}

export default App
