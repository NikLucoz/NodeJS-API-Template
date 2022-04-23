import express from 'express';
import controller from '../controller/endpoints';
import { checkJwt } from './auth/middleware';
const router = express.Router();

//router.get('/event/:eventId', controller.getEvent);

export = router;
