import React from 'react'

import VaccineStatistics from './VaccineStatistics'
import BarChart from './BarChart'
import {
  getTotalVaccinationsToDate,
  filterByDate,
  getVaccinationsByBottle,
  getTotalVaccinesToDate,
  getInjections
} from '../util/helpers'

const Display = ({ data, date }) => {
  const solarBuddhica = filterByDate(data.solarBuddhica, date)
  const antiqua = filterByDate(data.antiqua, date)
  const zerpfy = filterByDate(data.zerpfy, date)
  const vaccinations = filterByDate(data.vaccinations, date)
  const vaccines = data.antiqua.concat(data.zerpfy).concat(data.solarBuddhica)
  const vaccinationsByBottle = getVaccinationsByBottle(vaccinations, vaccines)
  const totalVaccinationsToDate = getTotalVaccinationsToDate(data.vaccinations, date)
  const totalSolarBuddhicaToDate = getTotalVaccinesToDate(data.solarBuddhica, date)
  const totalAntiquaToDate = getTotalVaccinesToDate(data.antiqua, date)
  const totalZerpfyToDate = getTotalVaccinesToDate(data.zerpfy, date)
  let chartData = {}
  let totalVaccines

  if (!data.vaccinations || data.vaccinations.length === 0) {
    return null
  }

  if (antiqua && solarBuddhica && zerpfy) {
    totalVaccines = antiqua.length + solarBuddhica.length + zerpfy.length
    chartData = {
      antiqua: {
        orders: antiqua.length,
        injections: getInjections(antiqua),
        vaccinations: vaccinationsByBottle.antiqua
      },
      solarBuddhica: {
        orders: solarBuddhica.length,
        injections: getInjections(solarBuddhica),
        vaccinations: vaccinationsByBottle.solarBuddhica
      },
      zerpfy: {
        orders: zerpfy.length,
        injections: getInjections(zerpfy),
        vaccinations: vaccinationsByBottle.zerpfy
      }
    }
  }

  if (!date) {
    return (
      <div>
        no data on given date
      </div>
    )
  }

  return (
    <div className="statistics-container">
      <VaccineStatistics vaccine={antiqua} brand={'Antiqua'} vaccinations={vaccinationsByBottle.antiqua} />
      <VaccineStatistics vaccine={solarBuddhica} brand={'SolarBuddhica'} vaccinations={vaccinationsByBottle.solarBuddhica} />
      <VaccineStatistics vaccine={zerpfy} brand={'Zerpfy'} vaccinations={vaccinationsByBottle.zerpfy} />
      <div className="statistics-card">
        <h2>Total</h2>
        <p>total orders arrived: {totalVaccines}</p>
        <p>vaccinations: {vaccinations.length}</p>
        <hr></hr>
        <p>total vaccinations to date {totalVaccinationsToDate.length}</p>
        <p>total Antiqua orders to date: {totalAntiquaToDate.length}</p>
        <p>total SolarBuddhica orders to date: {totalSolarBuddhicaToDate.length}</p>
        <p>total Zerpfy orders to date: {totalZerpfyToDate.length}</p>
        <hr></hr>
      </div>
      <BarChart chartData={chartData}/>
    </div>
  )
}

export default Display