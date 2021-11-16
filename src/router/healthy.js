import express from 'express'
import { httpResponse } from '../utils/httpResponse';

export const healtyRouter = express();

healtyRouter.get('/healthy', async (req, res) => {
  return httpResponse({res, statusCode: 200})
});