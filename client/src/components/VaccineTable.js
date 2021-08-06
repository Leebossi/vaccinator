import React from 'react'

const VaccineTable = ({ vaccine }) => {
  return (
    <div>
      <h2>{vaccine[0].vaccine}</h2>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>order#</th>
            <th>contact</th>
            <th>district</th>
            <th>arrived</th>
          </tr>
          {vaccine.map(v =>
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.orderNumber}</td>
              <td>{v.responsiblePerson}</td>
              <td>{v.healthCareDistrict}</td>
              <td>{new Date(v.arrived).toLocaleString("fi-FI")}</td>
            </tr>
          )}
          </tbody>
      </table>
    </div>
  )
}

export default VaccineTable