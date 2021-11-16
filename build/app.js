"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _router = require("./router");

var _config = require("./config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, 'public')));
app.use(_router.router);
app.listen(_config.config.port, () => {
  console.log(`Server started at port ${_config.config.port}`);
});