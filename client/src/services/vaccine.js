import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/'

const getAntiqua = async () => {
  const response = await axios.get(baseUrl + 'antiqua')
  return response.data
}

const getSolarBuddhica = async () => {
  const response = await axios.get(baseUrl + 'solarbuddhica')
  return response.data
}

const getZerpfy = async () => {
  const response = await axios.get(baseUrl + 'zerpfy')
  return response.data
}

const exportedObject = { getAntiqua, getSolarBuddhica, getZerpfy }

export default exportedObject