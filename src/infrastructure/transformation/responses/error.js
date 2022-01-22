import { UserInputError, ApolloError } from 'apollo-server-express';
import { Error } from 'mongoose';

const { ValidationError } = Error;

export const error = (err) => {
  if (err instanceof ValidationError) {
    return new UserInputError(err.message, {
      invalidArgs: Object.keys(err.errors),
    });
  }

  if (err.name === 'MongoError') {
    return new ApolloError('Internal server error', 'INTERNAL_SERVER_ERROR');
  }

  return err.message;
};
