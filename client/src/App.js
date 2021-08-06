import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import vaccinationService from './services/vaccinations'
import VaccineTable from './components/VaccineTable'

const App = () => {
  const [vaccinations, setVaccinations] = useState([])
  const [antiqua, setAntiqua] = useState([])
  const [solarBuddhica, setSolarBuddhica] = useState([])
  const [zerpfy, setZerpfy] = useState([])

  useEffect(() => {
    vaccinationService
      .getAll()
      .then(initialVaccinations => {
        setVaccinations(initialVaccinations)
      })

    axios
      .get('http://localhost:3001/api/antiqua')
      .then(response => {
        setAntiqua(response.data)
      })

    axios
      .get('http://localhost:3001/api/solarbuddhica')
      .then(response => {
        setSolarBuddhica(response.data)
      })

    axios
      .get('http://localhost:3001/api/zerpfy')
      .then(response => {
        setZerpfy(response.data)
      })

    console.log('render', vaccinations.length, 'vaccinations')
    console.log('render', antiqua.length, 'Antiqua')
    console.log('render', solarBuddhica.length, 'SolarBuddhica')
    console.log('render', zerpfy.length, 'Zerpfy')

  }, [vaccinations.length])


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
          <h2>Antiqua</h2>
          <VaccineTable vaccine={antiqua} />
        </Route>
        <Route path="/solarbuddhica">
          <h2>Solar Buddhica</h2>
          <VaccineTable vaccine={solarBuddhica} />
        </Route>
        <Route path="/zerpfy">
          <h2>Zerpfy</h2>
          <VaccineTable vaccine={zerpfy} />
        </Route>
        <Route path="/">
          <h2>Dis is home</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;