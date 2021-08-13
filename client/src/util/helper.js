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