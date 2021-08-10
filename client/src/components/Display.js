import React from 'react'

const Display = ({ data }) => {
  const totalVaccines = data.antiqua.length + data.solarBuddhica.length + data.zerpfy.length

  return (
    <div>
      <h2>Home</h2>
      <p>antiqua: {data.antiqua.length}</p>
      <p>solarBuddhica: {data.solarBuddhica.length}</p>
      <p>zerpfy: {data.zerpfy.length}</p>
      <p>total: {totalVaccines}</p>
      <p>vaccinations: {data.vaccinations.length}</p>
    </div>
  )
}

export default Display