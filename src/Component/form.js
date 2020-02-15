import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const InvestmentForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    fundName: '',
    amountInvested: '',
    currentvalue: '',
  })

  const handleChange = name => event => {
    setFormValues({ ...formValues, [name]: event.target.value })
  }
  const handleSubmit = () => {
    onSubmit(formValues)
    setFormValues({
      fundName: '',
      amountInvested: '',
      currentvalue: '',
    })
  }
  return (
    <form noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="fundName"
        label="Mutual Fund"
        name="fundName"
        autoComplete="Mutual Fund"
        autoFocus
        value={formValues.fundName}
        onChange={handleChange('fundName')}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="amountInvested"
        label="Amount Invested "
        name="amountInvested"
        autoComplete="Amount Invested"
        value={formValues.amountInvested}
        onChange={handleChange('amountInvested')}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="presentvalue"
        label="Present Value"
        name="presentvalue"
        autoComplete="Present Value"
        value={formValues.currentvalue}
        onChange={handleChange('currentvalue')}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add
      </Button>
    </form>
  )
}
export default InvestmentForm
