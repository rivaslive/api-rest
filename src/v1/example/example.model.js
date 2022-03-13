import mongoose from 'mongoose';

const { Schema } = mongoose;
const modelName = 'examples';

const schema = new Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'deleted'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  // transform(_doc, ret) {
  //   // eslint-disable-next-line no-param-reassign,no-underscore-dangle
  //   delete ret._id;
  // },
});

// rename name Example to singular Model
export default mongoose.models.Example || mongoose.model(modelName, schema);
