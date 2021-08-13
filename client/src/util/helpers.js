export const isExpired = (dateX, dateY, shelfLife) => {
  const ms = (Date.parse(dateX) - Date.parse(dateY))
  const days = ms / 86400000

  return (Math.abs(days) > shelfLife ? true : false)
}


// returns date in format yyyy-mm-dd
export const formatDate = (date) => {
  if (!date) {
    return null
  }
  return date.toISOString().split(/[T ]/i)[0]
}

export const filterByDate = (data, date) => {
  let result
  if (data.length > 0) {
    if (Object.keys(data[0])[0] === 'id') {
      result = data.filter(d => d.arrived.includes(formatDate(date)))
    } else if (Object.keys(data[0])[0] === 'vaccination-id') {
      result = data.filter(d => d.vaccinationDate.includes(formatDate(date)))
    }
  }

  return result
}

export const getVaccinationsByBottle = (vaccinations, vaccines) => {
  let vaccinationsByBottle = {
    antiqua: 0,
    solarBuddhica: 0,
    zerpfy: 0
  }
  let sourceBottles = []

  for (let i = 0; i < vaccinations.length; i++) {
    sourceBottles.push(vaccinations[i]['sourceBottle'])
  }

  for (let i = 0; i < sourceBottles.length; i++) {
    const found = vaccines.find(vaccine => vaccine.id === sourceBottles[i])
    if (found.vaccine === 'Antiqua') {
      vaccinationsByBottle.antiqua++
    } else if (found.vaccine === 'SolarBuddhica') {
      vaccinationsByBottle.solarBuddhica++
    } else if (found.vaccine === 'Zerpfy') {
      vaccinationsByBottle.zerpfy++
    }
  }

  return vaccinationsByBottle
}

export const getTotalVaccinationsToDate = (vaccinations, date) => {
  if (!vaccinations || !date) {
    return null
  }
  let dateToCompare = new Date(date)
  let result
  dateToCompare.setUTCHours(24, 0, 0, 0)
  result = vaccinations.filter(v => v.vaccinationDate < dateToCompare.toISOString())
  return result
}

export const getTotalVaccinesToDate = (vaccine, date) => {
  let dateToCompare = new Date(date)
  let result
  dateToCompare.setUTCHours(24, 0, 0, 0)
  result = vaccine.filter(v => v.arrived < dateToCompare.toISOString())
  return result
}