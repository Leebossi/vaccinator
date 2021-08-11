import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { filterByDate } from './util/helper'

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
  const [selectedDate, setSelectedDate] = useState(new Date())

  const data = {vaccinations, antiqua, solarBuddhica, zerpfy}

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
      <div>
        <Link style={style} to="/">home</Link>
        <Link style={style} to="/vaccinations">vaccinations</Link>
        <Link style={style} to="/antiqua">Antiqua</Link>
        <Link style={style} to="/solarbuddhica">Solar Buddhica</Link>
        <Link style={style} to="/zerpfy">Zerpfy</Link>
      </div>

      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
      />

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
    </Router>
  );
}

export default App;