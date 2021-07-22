import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [vaccinations, setVaccinations] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/vaccinations')
      .then(response => {
        setVaccinations(response.data)
      })
  }, [])
  console.log('render', vaccinations.length, 'vaccinations')

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
  );
}

export default App;