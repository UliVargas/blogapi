import { Model, STRING, UUID, UUIDV4 } from 'sequelize'
import sequelize from '..'

class Posts extends Model {}

Posts.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  title: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING(1234),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Posts',
  tableName: 'Posts'
})

export default Posts
