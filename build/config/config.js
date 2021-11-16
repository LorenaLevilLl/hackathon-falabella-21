"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const CONTEXT = process.env.CONTEXT || 'development';
const configContext = {
  development: {
    port: process.env.PORT || 4000
  }
};
const config = configContext[CONTEXT];
exports.config = config;