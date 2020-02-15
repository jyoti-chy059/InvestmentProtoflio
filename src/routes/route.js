import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DoughnutChart from '../Component/chart'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={DoughnutChart} />
      <Route component={DoughnutChart} />
    </Switch>
  )
}
