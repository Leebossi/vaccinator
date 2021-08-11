import React from 'react'

const VaccineStatistics = ({vaccine, brand}) => {
  if (vaccine.length <= 0) {
    return null
  }

  return (
    <div>
      <h2>{brand}</h2>
      <p>orders: {vaccine.length}</p>
    </div>
  )
}

export default VaccineStatistics