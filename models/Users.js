import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure the email is unique
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true // Automatically create createdAt and updatedAt fields
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
export default User;
