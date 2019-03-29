import React from 'react'
import { Chart, Line } from 'react-chartjs-2'
import 'chartjs-plugin-downsample'

Chart.defaults.global.defaultFontSize = 16
Chart.defaults.global.elements.point.radius = 0
Chart.defaults.global.elements.point.hitRadius = 10
Chart.defaults.global.elements.point.hoverRadius = 10

// const compileDatasets = dataset => {
//   return {
//     label: 'Peach',
//     borderColor: 'rgba(136, 104, 255)',
//     backgroundColor: 'rgba(220, 227, 255)',
//     strokeColor: 'rgba(220,220,220,1)',
//     pointColor: 'rgba(136, 104, 255)',
//     pointStrokeColor: '#fff',
//     pointHighlightFill: '#fff',
//     pointHighlightStroke: 'rgba(220,220,220,1)',
//     // spanGaps: true,
//     data: [{ x: 0, y: 1000 }, { x: 1, y: 1001 }],
//   }
// }

export default ({
  stacked = false,
  dataset,
  xDataset,
  yDatasets,
  title,
  xLabel,
  yLabel,
  config,
}) => {
  const data = {
    labels: xDataset,
    datasets: [
      {
        label: yLabel,
        fill: true,
        lineTension: 0.1,
        borderColor: 'rgb(78, 60, 169)',
        backgroundColor: 'rgb(220, 227, 255)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(78, 60, 169)',
        pointBackgroundColor: 'rgb(78, 60, 169)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(78, 60, 169)',
        pointHoverBorderColor: 'rgb(78, 60, 169)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataset.map(e => e.y),
      },
    ],
  }

  const chartOptions = {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: title,
    },
    tooltips: {
      callbacks: {
        title: (items, data) => `x: ${items[0].xLabel}`,
        label: (item, data) => `y: ${item.yLabel}`,
      },
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: xLabel,
          },
        },
      ],
      yAxes: [
        {
          stacked: stacked,
          scaleLabel: {
            display: true,
            labelString: yLabel,
          },
          ticks: {
            stepSize: config.stepSize, // congifure for each graph
            suggestedMax: config.suggestedMax, // congifure for each graph
            suggestedMin: 0,
          },
        },
      ],
    },
  }

  return <Line data={data} options={chartOptions} width={720} height={500} />
}