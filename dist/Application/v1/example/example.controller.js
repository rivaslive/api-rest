"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllExample = exports.createExample = void 0;

var _example = _interopRequireDefault(require("./example.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAllExample = async (req, res) => {
  const {
    offset,
    limit
  } = req.params;

  try {
    const data = await _example.default.find().skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500
    });
  }
};

exports.getAllExample = getAllExample;

const createExample = async (req, res) => {
  const {
    fullName,
    email
  } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({
      message: 'Faltan datos, la consulta debe contener fullName y email',
      code: 400
    });
  }

  try {
    const data = await _example.default.create({
      fullName,
      email
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500
    });
  }
};

exports.createExample = createExample;