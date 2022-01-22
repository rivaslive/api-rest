import studentModule from './student';

const modules = {
  typeDefs: [studentModule.typeDefs],
  resolvers: [studentModule.resolvers],
};

export default modules;
