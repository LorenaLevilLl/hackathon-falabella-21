import express from 'express'
import { healtyRouter } from './healthy';
import { proccessCsvRouter } from './proccessCsv.router';
import { ruleRouter } from './rule.router';

export const router = express();

router.use( healtyRouter );
router.use( proccessCsvRouter );
router.use( ruleRouter );
