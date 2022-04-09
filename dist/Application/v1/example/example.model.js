"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _getModelName = _interopRequireDefault(require("../../../Utils/getModelName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const {
  singularName,
  pluralName
} = (0, _getModelName.default)('example');
const schema = new Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'deleted'],
    default: 'active'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
}); // Ensure virtual fields are serialised.

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,

  transform(_doc, ret) {
    delete ret._id;
  }

}); // rename name Example to singular Model

var _default = _mongoose.default.models[singularName] || _mongoose.default.model(pluralName, schema);

exports.default = _default;