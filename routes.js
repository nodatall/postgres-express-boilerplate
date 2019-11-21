const exampleAction = require('./actions/exampleAction')

module.exports = function(app) {
  app.get('/status', (req, res) => {
    exampleAction().then(() => {
      console.log(`-:: done taking action ::-`)
    })
    res.json({status: 'ok'})
  })
}
