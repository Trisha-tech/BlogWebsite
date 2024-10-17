import Blog from "../models/Blogs.js";
import User from "../models/Users.js";
// Controller to create a new blog post
export const createBlog = async (req, res) => {
    try {
        const { author, title, content } = req.body;

        // Check if all required fields are provided
        if (!author || !title || !content) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new blog post
        const newBlog = new Blog({
            author,
            title,
            content,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog post created successfully", blog: newBlog });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: "Error creating blog", error: error.message });
    }
};

// Controller to delete a blog post
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the blog by ID
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: "Blog post deleted successfully" });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ message: "Error deleting blog", error: error.message });
    }
};

// Controller to find a blog post by ID
export const filterBlog = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the blog post by ID
        const blog = await Blog.findById(id).populate('author', 'name'); // Assuming the author is linked to a User model with a 'name' field

        if (!blog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        console.error("Error fetching blog post:", error);
        res.status(500).json({ message: "Error fetching blog post", error: error.message });
    }
};

// Controller to update a blog post
export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        // Find and update the blog by ID
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, content, updatedAt: Date.now() },
            { new: true } // Return the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog post not found" });
        }

        res.status(200).json({ message: "Blog post updated successfully", blog: updatedBlog });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "Error updating blog", error: error.message });
    }
};

