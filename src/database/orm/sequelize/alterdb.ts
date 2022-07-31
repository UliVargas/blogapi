import sequelize from '.'
import './models'

const execute = async () => {
  await sequelize.sync({ alter: true })
    .catch(e => {
      console.log(e)
      process.exit(1)
    })
  process.exit(0)
}

execute()
