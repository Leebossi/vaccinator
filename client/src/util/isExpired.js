const isExpired = (dateX, dateY, shelfLife) => {
  const ms = (Date.parse(dateX) - Date.parse(dateY))
  const days = ms / 86400000

  return (Math.abs(days) > shelfLife ? true : false)
}

export default isExpired