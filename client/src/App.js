import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

const App = () => {
  const [vaccinations, setVaccinations] = useState([])
  const [antiqua, setAntiqua] = useState([])
  const [solarBuddhica, setSolarBuddhica] = useState([])
  const [zerpfy, setZerpfy] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/vaccinations')
      .then(response => {
        setVaccinations(response.data)
      })

    axios
      .get('http://localhost:3001/api/antiqua')
      .then(response => {
        setAntiqua(response.data)
      })
  }, [])
  console.log('render', vaccinations.length, 'vaccinations')
  console.log('render', antiqua.length, 'antiqua')

  const style = {
    padding: 10
  }

  return (
    <Router>
      <div>
        <Link style={style} to="/">home</Link>
        <Link style={style} to="/vaccinations">vaccinations</Link>
        <Link style={style} to="/antiqua">Antiqua</Link>
        <Link style={style} to="/solarbuddhica">Solar Buddhica</Link>
        <Link style={style} to="/zerpfy">Zerpfy</Link>
      </div>

      <Switch>
        <Route path="/vaccinations">
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
        </Route>
        <Route path="/antiqua">
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>order#</th>
                <th>contact</th>
                <th>district</th>
                <th>arrived</th>
              </tr>
              {antiqua.map(a =>
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.orderNumber}</td>
                  <td>{a.responsiblePerson}</td>
                  <td>{a.healthCareDistrict}</td>
                  <td>{a.arrived}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Route>
        <Route path="/solarbuddhica">
          Solar Buddhica
        </Route>
        <Route path="/zerpfy">
          Zerpfy
        </Route>
        <Route path="/">
          <h2>Dis is home</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;