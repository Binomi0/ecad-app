module.exports = {
  port: process.env.PORT,

  mongo: {
    uri: process.env.ATLAS_HOST,
    dataBaseName: "admin",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  },
};
