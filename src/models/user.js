const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    booksFromUser: [{ type: Schema.Types.ObjectId, ref: "Book" }]
});

UserSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
      this.createdAt = now;
    }
  
    // ENCRYPT PASSWORD
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
    });
  });

// Need to user function to enable this.password to work
UserSchema.methods.comparePassword = function(password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      done(err, isMatch);
    });
};

module.exports = mongoose.model("User", UserSchema);