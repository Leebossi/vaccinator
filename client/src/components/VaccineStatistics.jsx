import React from 'react'
import { getInjections } from '../util/helpers'

const VaccineStatistics = ({vaccine, brand, vaccinations}) => {
  if (!vaccine) {
    return null
  }

  return (
    <div className="statistics-card">
      <h2>{brand}</h2>
      <p>orders arrived: {vaccine.length}</p>
      <p>amount of injections in arrived orders: {getInjections(vaccine)}</p>
      <p>vaccinations given: {vaccinations}</p>
    </div>
  )
}

export default VaccineStatistics