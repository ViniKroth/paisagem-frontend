var env       = process.env.NODE_ENV || 'development'
var environment    = require('./config.json')[env]

console.log("MUITO MERDA"+ process.env.REACT_APP_API_URL)

export default environment

