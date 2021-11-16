import express from 'express'

export const testRouter = express();

testRouter.get('/test', async (req, res) => {
  res.send({
    message: 'Hola',
  })
});