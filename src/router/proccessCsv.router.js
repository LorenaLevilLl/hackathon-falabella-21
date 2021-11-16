import express from 'express';
import { processCsMiddleware } from '../middleware/processCsv.middleware';

export const proccessCsvRouter = express();

const prefix = '/csv';

proccessCsvRouter.get(prefix, processCsMiddleware);