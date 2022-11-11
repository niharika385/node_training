const mongoose = require('mongoose')
const User = mongoose.model('user', {
    name:{
        type:String
    },
    password:{
        type:String,
  
        trim:true,
        minlength:7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error("invalid!")
            }
        }

    },
    age:{
        type: Number
    }
})

module.exports = {
    User:User}