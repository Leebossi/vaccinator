import React, { useState } from 'react'

const VaccineTable = ({ data, vaccine }) => {
  const [filter, setFilter] = useState("")

  const search = (rows) => {
    const columns = rows[0] && Object.keys(rows[0])
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toString().toLowerCase().indexOf(filter.toLowerCase()) > -1)
    )
  }

  const filteredData = search(data)

  return (
    <div>
      <h2>{vaccine}</h2>
      <div>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}></input>
      </div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>order#</th>
            <th>contact</th>
            <th>district</th>
            <th>arrived</th>
          </tr>
          {filteredData.map(d =>
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.orderNumber}</td>
              <td>{d.responsiblePerson}</td>
              <td>{d.healthCareDistrict}</td>
              <td>{new Date(d.arrived).toLocaleString("fi-FI")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default VaccineTable