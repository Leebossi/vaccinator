import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

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
          Antiqua
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