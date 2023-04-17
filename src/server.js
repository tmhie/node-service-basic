import express from 'express'
import configViewEngine from './configuration/viewsEngine.js'
import initWebRoute from './route/web.js'
import dotenv from 'dotenv';
// import connection from './configuration/connectDb'

dotenv.config();

const app = express()
const port = process.env.PORT || 8080;

configViewEngine(app)
initWebRoute(app)
// connection(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})