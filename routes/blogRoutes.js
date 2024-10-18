import {Router} from "express"; 
import { createBlog,deleteBlog,filterBlog,updateBlog } from "../controllers/blogController.js";
const router = Router();

// Route to create a new blog post
router.post("/createBlog", createBlog);

// Route to delete a blog post 
router.delete("/deleteBlog/:id", deleteBlog); 

// Route to find a blog post based on ID
router.get("/filterBlog/:id", filterBlog);

// Route to update a blog post
router.put("/updateBlog/:id", updateBlog); 

export default router; 
