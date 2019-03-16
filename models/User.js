const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String
})

module.exports = mongoose.model("User", userSchema)
