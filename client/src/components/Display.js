import React from 'react'

import VaccineStatistics from './VaccineStatistics'
import {filterByDate} from '../util/helper'

const Display = ({ data, date }) => {
  if (data.vaccinations.length <= 0) {
    return null
  }
  
  const solarBuddhica = filterByDate(data.solarBuddhica, date)
  const antiqua = filterByDate(data.antiqua, date)
  const zerpfy = filterByDate(data.zerpfy, date)
  const vaccinations = filterByDate(data.vaccinations, date)
  let totalVaccines

  if (antiqua || solarBuddhica || zerpfy) {
    totalVaccines = antiqua.length + solarBuddhica.length + zerpfy.length
  }
  
  return (
    <div>
      <h2>Home</h2>
      <p>{date.toDateString()}</p>
      <VaccineStatistics vaccine={antiqua} brand={'Antiqua'} />
      <VaccineStatistics vaccine={solarBuddhica} brand={'SolarBuddhica'} />
      <VaccineStatistics vaccine={zerpfy} brand={'Zerpfy'} />
      <h2>Total</h2>
      <p>total orders arrived: {totalVaccines}</p>
      <p>vaccinations: {vaccinations.length}</p>
    </div>
  )
}

export default Display