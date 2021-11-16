"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateProbabilityMiddleware = void 0;

var _httpResponse = require("../utils/httpResponse");

const RULES = require('../mock/rules');

const calculateProbabilityMiddleware = (req, res, next) => {
  let probability;
  console.log(RULES[0].conditions);
  console.log(req.acaData);
  return (0, _httpResponse.httpResponse)({
    res,
    statusCode: 200
  });
};

exports.calculateProbabilityMiddleware = calculateProbabilityMiddleware;