import config from '../../config/env'

export default {
  database: config.database,
  username: config.username,
  password: config.password,
  port: 5432,
  define: {
    timestamps: false
  }
}
