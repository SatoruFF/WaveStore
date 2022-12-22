import express from "express";
import config from 'config';
import {pool} from'./models/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cors } from "./middleware/cors.middleware.js";
import router from "./routes/index.js";
import fileUpload from "express-fileupload";
import errorHandler from "./middleware/ErrorHandlingMiddleware.js";
import * as model from './models/models.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const PORT = config.get('PORT')

app.use(cors)
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)

// Error
app.use(errorHandler)

const start = async () => {
    try {
        await pool.authenticate()
        await pool.sync()
        app.listen(PORT, () => {
            console.log(`Server listening on port:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()