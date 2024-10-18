import mongoose, { now } from 'mongoose';
const schema = mongoose.Schema;
//basic schema for blogs
const BlogSchema=new schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const Blog=mongoose.model('Blog',BlogSchema)

export default Blog;