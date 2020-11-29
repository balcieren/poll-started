module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    SECRET_KEY: process.env.SECRET_KEY,
    WEB_URL: `${process.env.WEB_URL}:${process.env.PORT}`,
    PORT: process.env.PORT,
  },
};
