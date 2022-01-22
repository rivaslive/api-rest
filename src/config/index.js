const config = {
  port: process.env.APP_PORT || 4000,
  mongo: {
    uri: process.env.APP_DATABASE_URL,
    options: {},
  },
};

export default config;
