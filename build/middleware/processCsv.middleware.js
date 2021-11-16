"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processCsMiddleware = void 0;

const CSV = require('../mock/CSV');

const processCsMiddleware = (req, res, next) => {
  console.log('POR ACA');
  req.csv = CSV;
  return next();
};

exports.processCsMiddleware = processCsMiddleware;