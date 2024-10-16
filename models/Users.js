import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const User =new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:['User','Admin'],
        default:'User',
    },
    BlogIds:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Blogs',
    }],
    LikedBlogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blogs',
    }]

});

export default User;