const { Sequelize } = require('sequelize')
// process.loadEnvFile()
const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'local'
dotenv.config({ path: `.env.${ENV}` })

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
})

module.exports = sequelize
