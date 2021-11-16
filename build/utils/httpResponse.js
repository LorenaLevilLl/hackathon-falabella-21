"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpResponse = void 0;

var _httpStatus = require("./http-status");

const isOk = code => code >= 200 && code <= 299;

const httpResponse = ({
  res,
  statusCode,
  payload = [],
  message = '',
  description = ''
}) => {
  const response = {
    ok: isOk(statusCode),
    message: message || _httpStatus.httpStatus[statusCode].message,
    description: description || _httpStatus.httpStatus[statusCode].description,
    payload
  };
  return res.status(statusCode).json(response);
};

exports.httpResponse = httpResponse;