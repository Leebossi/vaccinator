import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import { filterByDate } from './util/helpers'

import vaccinationService from './services/vaccinations'
import vaccineService from './services/vaccine'

import VaccineTable from './components/VaccineTable'
import VaccinationTable from './components/VaccinationTable'
import Display from './components/Display'

const App = () => {
  const [vaccinations, setVaccinations] = useState([])
  const [antiqua, setAntiqua] = useState([])
  const [solarBuddhica, setSolarBuddhica] = useState([])
  const [zerpfy, setZerpfy] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date('2021-04-12T11:10:06.473587Z'))

  let data = { vaccinations, antiqua, solarBuddhica, zerpfy }

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

  useEffect(() => {
    console.log('selected date:', selectedDate)
  }, [selectedDate])

  const style = {
    paddingRight: 10
  }

  return (
    <Router>
      <div className="navbar">
        <Link className="nav-item" to="/">home</Link>
        <Link className="nav-item" to="/vaccinations">vaccinations</Link>
        <Link className="nav-item" to="/antiqua">Antiqua</Link>
        <Link className="nav-item" to="/solarbuddhica">Solar Buddhica</Link>
        <Link className="nav-item" to="/zerpfy">Zerpfy</Link>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='dd/MM/yyyy'
        />
      </div>
      <main>
        <Switch>
          <Route path="/vaccinations">
            <VaccinationTable vaccinations={filterByDate(vaccinations, selectedDate)} />
          </Route>
          <Route path="/antiqua">
            <VaccineTable data={filterByDate(antiqua, selectedDate)} vaccine={'Antiqua'} />
          </Route>
          <Route path="/solarbuddhica">
            <VaccineTable data={filterByDate(solarBuddhica, selectedDate)} vaccine={'SolarBuddhica'} />
          </Route>
          <Route path="/zerpfy">
            <VaccineTable data={filterByDate(zerpfy, selectedDate)} vaccine={'Zerpfy'} />
          </Route>
          <Route path="/">
            <Display data={data} date={selectedDate} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;