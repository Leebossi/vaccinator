import React from 'react'

const VaccineStatistics = ({vaccine, brand, vaccinations}) => {
  const getInjections = (vaccine) => {
    let injections = 0
    for (let i = 0; i < vaccine.length; i++) {
      injections += vaccine[i].injections  
    }
    return injections
  }

  if (vaccine.length <= 0) {
    return null
  }

  return (
    <div>
      <h2>{brand}</h2>
      <p>orders arrived: {vaccine.length}</p>
      <p>amount of injections in arrived orders: {getInjections(vaccine)}</p>
      <p>vaccinations: {vaccinations}</p>
    </div>
  )
}

export default VaccineStatistics