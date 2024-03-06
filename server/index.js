import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.listen(8080, () => console.log("server running on port 8080"))