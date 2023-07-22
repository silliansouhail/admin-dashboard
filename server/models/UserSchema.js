const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            min:3,
            max:100,
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            min:8,
        },
        city:String,
        state:String,
        country:String,
        occupation:String,
        phoneNumber:String,
        transactions:Array,
        role:{
            type:String,
            enum:["user" ,"admin", "superadmin"],
            default:"admin",
        },

    },
    {timestamps:true,}
)

const User = mongoose.model('users',UserSchema)

module.exports = User