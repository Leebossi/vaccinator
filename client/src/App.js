import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import vaccinationService from './services/vaccinations'
import VaccineTable from './components/VaccineTable'
import VaccinationTable from './components/VaccinationTable'

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
          <h2>Dis is home</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;