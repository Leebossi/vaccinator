import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (chartData) => {
  if (!chartData.length === 0) {
    return null
  }

  let data = {}
  
  if (chartData.chartData.antiqua && chartData.chartData.solarBuddhica && chartData.chartData.zerpfy) {
    const antiqua = chartData.chartData.antiqua
    const solarBuddhica = chartData.chartData.solarBuddhica
    const zerpfy = chartData.chartData.zerpfy
    data = {
      labels: ['orders arrived', '# of injections in orders', 'vaccinations given'],
      datasets: [
        {
          label: 'Antiqua',
          data: [antiqua.orders, antiqua.injections, antiqua.vaccinations],
          backgroundColor: 'rgb(251, 97, 218)',
        },
        {
          label: 'SolarBuddhica',
          data: [solarBuddhica.orders, solarBuddhica.injections, solarBuddhica.vaccinations],
          backgroundColor: 'rgb(97, 218, 251)',
        },
        {
          label: 'Zerpfy',
          data: [zerpfy.orders, zerpfy.injections, zerpfy.vaccinations],
          backgroundColor: 'rgb(218, 251, 97)',
        },
      ],
    }
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart