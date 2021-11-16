"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proccessCsvRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _processCsv = require("../middleware/processCsv.middleware");

var _calculateProbability = require("../middleware/calculateProbability.middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const proccessCsvRouter = (0, _express.default)();
exports.proccessCsvRouter = proccessCsvRouter;
const prefix = '/csv';
proccessCsvRouter.get(prefix, _processCsv.processCsMiddleware, _calculateProbability.calculateProbabilityMiddleware);