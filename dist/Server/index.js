"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../config"));

var _db = require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  port
} = (0, _config.default)();
const app = (0, _express.default)(); // creating Server

const initializeServer = async routes => {
  // initialize DB
  await (0, _db.initializeDB)(); // json parse

  app.use(_express.default.json()); // set urls

  app.use(routes); // create express app

  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
};

var _default = initializeServer;
exports.default = _default;