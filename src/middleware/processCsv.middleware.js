const CSV = require('../mock/csv')

export const processCsMiddleware = (req, res, next) => {
  console.log('POR ACA');
  req.csv = CSV;
  return next();
}