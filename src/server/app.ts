import express, { Express, json } from 'express'
import morgan from 'morgan'

import routes from '../v1/routes/index.routes'

const app: Express = express()

app.use(morgan('dev'))
app.use(json({ limit: '50mb' }))

app.use('/api/v1', routes)

export default app
