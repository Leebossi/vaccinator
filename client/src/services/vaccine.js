import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/'

const getAntiqua = () => {
  const request = axios.get(baseUrl + 'antiqua')
  return request.then(response => response.data)
}

const getSolarBuddhica = () => {
  const request = axios.get(baseUrl + 'solarbuddhica')
  return request.then(response => response.data)
}

const getZerpfy = () => {
  const request = axios.get(baseUrl + 'zerpfy')
  return request.then(response => response.data)
}

export default { getAntiqua, getSolarBuddhica, getZerpfy }