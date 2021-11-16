import express from 'express';
import { jsonToCsvMiddleware } from '../middleware/jsonToCsv.middleware';
import { preditedModelMiddleware } from '../middleware/preditedModel.middleware';
import { csvToJsonMiddleware } from '../middleware/csvToJson.middleware';
import { uploadCsv } from '../middleware/uploadCsv.middleware';

export const proccessCsvRouter = express();

const prefix = '/csv';

proccessCsvRouter.post(
  `${prefix}/upload`, 
  uploadCsv.single("file"), 
  csvToJsonMiddleware, 
  preditedModelMiddleware,
  jsonToCsvMiddleware
);

