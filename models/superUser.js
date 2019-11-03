"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const superUserSchema = new Schema({
  userName: { type: String, required: true },
  pwd: { type: String, required: true },
  email: { type: String, required: true },
  lastLogin: Date
});

superUserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(
    candidatePassword.toString(),
    this.password,
    (err, isMatch) => {
      cb(err, isMatch);
    }
  );
};

superUserSchema.pre("save", next => {
  if (!this.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

const SuperUser = mongoose.model("SuperUser", superUserSchema);

module.exports = SuperUser;
