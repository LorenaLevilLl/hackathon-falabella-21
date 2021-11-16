"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testRouter = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const testRouter = (0, _express.default)();
exports.testRouter = testRouter;
testRouter.get('/test', async (req, res) => {
  res.send({
    message: 'Hola'
  });
});