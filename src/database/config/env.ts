import dotenv from 'dotenv'
dotenv.config()

type Env = {
  database: string | undefined,
  password: string | undefined,
  username: string | undefined
}

const env: Env = {
  database: process.env.DB_NAME,
  password: process.env.DB_PW,
  username: process.env.DB_USERNAME
}

export default env
