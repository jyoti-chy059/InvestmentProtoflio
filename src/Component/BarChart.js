import React from 'react'
import CanvasJSReact from '../canvas/canvasjs.react.js'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const BarChart = ({ dataPoints }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: 'light1',
    title: {
      text: 'Profit & Loss',
    },
    legend: {
      horizontalAlign: 'right',
      verticalAlign: 'center',
      fontSize: 15,
    },
    dataPointMaxWidth: 10,
    axisX: {
      title: 'SIP',
      gridThickness: 0,
      tickLength: 10,
    },
    axisY: {
      title: 'SIP per month profit & loss',
      gridThickness: 0,
      stripLines: [
        {
          value: 0,
          showOnTop: false,
          color: 'gray',
          thickness: 2,
        },
      ],
    },
    data: [
      {
        type: 'column',
        dataPoints: dataPoints,
      },
    ],
  }
  return (
    <div style={{ height: '100px', width: '500px' }}>
      <CanvasJSChart options={options} />
    </div>
  )
}

export default BarChart
