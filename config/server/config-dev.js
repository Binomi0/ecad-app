module.exports = {
  mongo: {
    uri: process.env.ATLAS_HOST,
    dataBaseName: "dev",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  },
};
