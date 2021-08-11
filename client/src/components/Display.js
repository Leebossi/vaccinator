import React from 'react'
import {formatDate} from '../util/helper'

const Display = ({ data, date }) => {
  if (data.vaccinations.length <= 0) {
    return null
  }
  
  const filterByDate = (data) => {
    let result
    if (data.length > 0) {
      if (Object.keys(data[0])[0] === 'id') {
        result = data.filter(d => d.arrived.includes(formatDate(date)))
      } else if (Object.keys(data[0])[0] === 'vaccination-id') {
        result = data.filter(d => d.vaccinationDate.includes(formatDate(date)))
      }
    }

    return result
  }
  
  const solarBuddhica = filterByDate(data.solarBuddhica)
  const antiqua = filterByDate(data.antiqua)
  const zerpfy = filterByDate(data.zerpfy)
  const vaccinations = filterByDate(data.vaccinations)
  let totalVaccines

  if (antiqua || solarBuddhica || zerpfy) {
    totalVaccines = antiqua.length + solarBuddhica.length + zerpfy.length
  }
  
  return (
    <div>
      <h2>Home</h2>
      <p>{date.toDateString()}</p>
      <p>antiqua: {antiqua.length}</p>
      <p>solarBuddhica: {solarBuddhica.length}</p>
      <p>zerpfy: {zerpfy.length}</p>
      <p>total: {totalVaccines}</p>
      <p>vaccinations: {vaccinations.length}</p>
    </div>
  )
}

export default Display