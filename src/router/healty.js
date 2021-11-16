import express from 'express'
import { httpResponse } from '../utils/httpResponse';

export const healtyRouter = express();

healtyRouter.get('/healty', async (req, res) => {
  return httpResponse({res, statusCode: 200})
});