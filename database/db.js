const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myecole")
  .then(() => console.log("Connected to MongoDB."))
  .catch((error) => console.error("Erreur de connexion mongodb :", error));

module.exports = mongoose;
