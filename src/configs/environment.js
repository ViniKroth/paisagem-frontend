var env       = process.env.NODE_ENV || 'development'
console.log(env)
var environment    = require('./config.json')
console.log(environment)
export default environment

