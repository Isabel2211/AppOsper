const mongoose = require("mongoose");
require("dotenv").config();

const dbconexion = async () => {
  try {
    await mongoose.connect(process.env.CADENA, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
    throw new Error("error a la hora de iniciar la base de datos");
  }
};

module.exports = {
  dbconexion,
};
