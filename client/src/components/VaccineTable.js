import React from 'react'

const VaccineTable = ({vaccine}) => {
  return (
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
            <td>{v.arrived}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default VaccineTable