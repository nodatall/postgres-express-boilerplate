const commands = require('../commands')
const queries = require('../queries')

module.exports = async function() {
  console.log(`-:: taking an action ::-`)
  await commands.exampleCommand()
  await queries.exampleQuery()
}
