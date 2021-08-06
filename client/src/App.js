import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import vaccinationService from './services/vaccinations'
import vaccineService from './services/vaccine'

import VaccineTable from './components/VaccineTable'
import VaccinationTable from './components/VaccinationTable'

const App = () => {
  const [vaccinations, setVaccinations] = useState([])
  const [antiqua, setAntiqua] = useState([])
  const [solarBuddhica, setSolarBuddhica] = useState([])
  const [zerpfy, setZerpfy] = useState([])

  const totalVaccines = antiqua.length + solarBuddhica.length + zerpfy.length

  useEffect(() => {
    vaccinationService
      .getAll()
      .then(initialVaccinations => {
        setVaccinations(initialVaccinations)
      })

    vaccineService
      .getAntiqua()
      .then(response => {
        setAntiqua(response)
      })

    vaccineService
      .getSolarBuddhica()
      .then(response => {
        setSolarBuddhica(response)
      })

    vaccineService
      .getZerpfy()
      .then(response => {
        setZerpfy(response)
      })
  }, [])

  const style = {
    paddingRight: 10
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
          <VaccinationTable vaccinations={vaccinations} />
        </Route>
        <Route path="/antiqua">
          <VaccineTable vaccine={antiqua} />
        </Route>
        <Route path="/solarbuddhica">
          <VaccineTable vaccine={solarBuddhica} />
        </Route>
        <Route path="/zerpfy">
          <VaccineTable vaccine={zerpfy} />
        </Route>
        <Route path="/">
          <div>
            <h2>Home</h2>
            <p>antiqua: {antiqua.length}</p>
            <p>solarBuddhica: {solarBuddhica.length}</p>
            <p>zerpfy: {zerpfy.length}</p>
            <p>total: {totalVaccines}</p>
            <p>vaccinations: {vaccinations.length}</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;