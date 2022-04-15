import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes  from './routes/router';

import DB_Config from './configs/DB_Config';
var mysql = require("mysql");


const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    next();
});

/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`)
);


var con = mysql.createPool({
    host: DB_Config.DB_HOST,
    user: DB_Config.DB_USER,
    password: DB_Config.DB_PASSWORD,
    database: DB_Config.DB_DATABASE,
});


export default con;
