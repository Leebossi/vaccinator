import React from 'react'

const VaccinationTable = ({ vaccinations }) => {
  if (!vaccinations || vaccinations.length === 0) {
    return null
  }

  return (
    <div>
      <h2>Vaccinations</h2>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>bottle</th>
            <th>gender</th>
            <th>date</th>
          </tr>
          {vaccinations.map(vaccination =>
            <tr key={vaccination['vaccination-id']}>
              <td>{vaccination['vaccination-id']}</td>
              <td>{vaccination.sourceBottle}</td>
              <td>{vaccination.gender}</td>
              <td>{vaccination.vaccinationDate}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default VaccinationTable