import express from 'express'
import { healtyRouter } from './healthy';
import { proccessCsvRouter } from './proccessCsv.router';

export const router = express();

router.use( healtyRouter );
router.use( proccessCsvRouter );
