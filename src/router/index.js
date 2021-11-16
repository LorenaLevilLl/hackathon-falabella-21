import express from 'express'
import { proccessCsvRouter } from './proccessCsv.router';
import {testRouter} from './test'

export const router = express();

router.use( testRouter );
router.use( proccessCsvRouter );
