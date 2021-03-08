import mongoose from 'mongoose';

// SECTION: User Schema :

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// SECTION: User Model :

mongoose.model('users', userSchema);
