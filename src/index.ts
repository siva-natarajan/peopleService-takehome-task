import express from 'express'
import morgan from 'morgan'
import routers from './routes'
import { fallbackHandler, globalErrorHandler } from './middlewares/errorHandlers.middleware'

const PORT = 3000

export const app = express()

app.use(express.json())
app.use(morgan("common"))

app.use('/api', routers)

app.use(fallbackHandler)
app.use(globalErrorHandler)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}