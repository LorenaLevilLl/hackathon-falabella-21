"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _proccessCsv = require("./proccessCsv.router");

var _test = require("./test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)();
exports.router = router;
router.use(_test.testRouter);
router.use(_proccessCsv.proccessCsvRouter);