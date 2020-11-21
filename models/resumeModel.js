const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const resumeSchema = new Schema({
    name: {
        type:String,
        required:[true , "Name is required"],
        trim:true
    },
    email:{
      type:String,
      required:[true , "Email is required"],
      unique:true
    },
    phone:{
      type:String,
      required:[true , "Phone number is required"],
    },
    location:{
      type:String,
      required:[true , "location is required"],
    },
    skills:{
      type:[String],
      required:[true , "location is required"],
    },
    experience: [
      {
        title: {
          type: String,
          required: true
        },
        company: {
          type: String,
          required: true
        },
        location: {
          type: String
        },
        from: {
          type: Date,
          required: true
        },
        to: {
          type: Date
        },
        current: {
          type: Boolean,
          default: false
        },
        description: {
          type: String
        }
      }
    ],
    createdAt:{
      type: Date,
      default: Date.now
    },
    
  });

  const Todo = mongoose.model('Resume', resumeSchema);

  module.exports = Todo