import {
  UUID,
  UUIDV4,
  STRING,
  Model
} from 'sequelize'
import sequelize from '..'

class Users extends Model {}

Users.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  lastname: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'Users',
  modelName: 'Users'
})

export default Users
