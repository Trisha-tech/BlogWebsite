import User from "../models/Users.js";
import Blog from "../models/Blogs.js";
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all the required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "One of the fields is missing" });
    }

    // Check if a user with the same email already exists

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(200).json({ message: "A new User created successfully" });
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json({ message: "Error creating User", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find user by ID and delete
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting User:", error);
    res.status(500).json({ message: "Error deleting User", error: error.message });
  }
};

export const filterUser = async (req, res) => {
  try {
    const { email } = req.query;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error filtering User:", error);
    res.status(500).json({ message: "Error filtering User", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating User:", error);
    res.status(500).json({ message: "Error updating User", error: error.message });
  }
};
