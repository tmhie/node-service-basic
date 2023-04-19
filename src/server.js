import express from 'express'
import configViewEngine from './configuration/viewsEngine.js'
import initWebRoute from './route/web.js'
import initApi from './route/api.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app)
initWebRoute(app)
initApi(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})