import { Router } from 'express';
import { createUser,deleteUser,filterUser,updateUser } from '../controllers/userController.js';
const router = Router(); // Initialize the router

// Route to create a new user
router.post("/createUser", createUser);

// Route to delete a user 
router.delete("/deleteUser/:id", deleteUser); // Added an ID parameter for deletion

// Route to find a user based on ID
router.get("/:id", filterUser);

// Route to update a user's details
router.put("/updateUser/:email", updateUser);

export default router; // Export the router for use in other parts of the application
