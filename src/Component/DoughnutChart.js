import React from 'react'
import CanvasJSReact from '../canvas/canvasjs.react.js'
// var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const DoughnutChart = ({ dataPoints }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: false,
    theme: 'light1',
    title: {
      text: 'SIP Amount Allocation',
    },
    data: [
      {
        type: 'doughnut',
        indexLabel: '{label}: {y}',
        startAngle: -90,
        dataPoints: dataPoints,
      },
    ],
  }

  return <CanvasJSChart options={options} />
}

export default DoughnutChart
