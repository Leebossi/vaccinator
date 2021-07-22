const fs = require("fs")
const readline = require("readline")

const readFile = (file) => {
  let lines = []

  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    console: false
  })

  rl.on('line', (line) => {
    lines.push(JSON.parse(line))
  })

  return lines
}

module.exports = { readFile }