import React from 'react'

import VaccineStatistics from './VaccineStatistics'
import { getTotalVaccinationsToDate, filterByDate, getVaccinationsByBottle, getTotalVaccinesToDate } from '../util/helpers'

const Display = ({ data, date }) => {
  if (!data.vaccinations || data.vaccinations.length === 0) {
    return null
  }

  const solarBuddhica = filterByDate(data.solarBuddhica, date)
  const antiqua = filterByDate(data.antiqua, date)
  const zerpfy = filterByDate(data.zerpfy, date)
  const vaccinations = filterByDate(data.vaccinations, date)
  const vaccines = data.antiqua.concat(data.zerpfy).concat(data.solarBuddhica)
  const vaccinationsByBottle = getVaccinationsByBottle(vaccinations, vaccines)
  let totalVaccines

  const totalVaccinationsToDate = getTotalVaccinationsToDate(data.vaccinations, date)
  const totalSolarBuddhicaToDate = getTotalVaccinesToDate(data.solarBuddhica, date)
  const totalAntiquaToDate = getTotalVaccinesToDate(data.antiqua, date)
  const totalZerpfyToDate = getTotalVaccinesToDate(data.zerpfy, date)

  if (antiqua || solarBuddhica || zerpfy) {
    totalVaccines = antiqua.length + solarBuddhica.length + zerpfy.length
  }

  if (!date) {
    return (
      <div>
        no data on given date
      </div>
    )
  }

  return (
    <div>
      <p>Statistics for {date.toDateString()}</p>
      <VaccineStatistics vaccine={antiqua} brand={'Antiqua'} vaccinations={vaccinationsByBottle.antiqua} />
      <VaccineStatistics vaccine={solarBuddhica} brand={'SolarBuddhica'} vaccinations={vaccinationsByBottle.solarBuddhica} />
      <VaccineStatistics vaccine={zerpfy} brand={'Zerpfy'} vaccinations={vaccinationsByBottle.zerpfy} />
      <h2>Total</h2>
      <p>total orders arrived: {totalVaccines}</p>
      <p>vaccinations: {vaccinations.length}</p>
      <p>total vaccinations to date {totalVaccinationsToDate.length}</p>
      <p>total Antiqua orders to date: {totalAntiquaToDate.length}</p>
      <p>total SolarBuddhica orders to date: {totalSolarBuddhicaToDate.length}</p>
      <p>total Zerpfy orders to date: {totalZerpfyToDate.length}</p>
    </div>
  )
}

export default Display