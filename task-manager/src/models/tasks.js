const mongoose = require('mongoose')

const task = mongoose.model('task', {
    description:{
        type: String,
        required: true
    },
    completed:{
        type:Number,
        default: false,
        validate(value){
            if(value<0){
                throw new Error('task  must be positive')
            }
        }
    }

})

module.exports = task