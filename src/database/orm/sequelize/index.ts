import { Sequelize } from 'sequelize'
import env from './config'

let sequelize: Sequelize | null = null

const connection = () => {
  if (!sequelize) {
    const { database, password, username } = env
    sequelize = new Sequelize(database, username, password, {
      dialect: 'postgres',
      host: 'localhost'
    })
  }

  sequelize.authenticate()
    .then(() => {
      console.log('The connection to the db has been established successfully')
    })
    .catch(err => {
      console.log(err)
      process.exit(1)
    })

  return sequelize
}

export default connection()
