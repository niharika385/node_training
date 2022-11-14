const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})



// const task1 = new task({
//     description: 'task2',
    
// })


// task1.save(). then( () => {
//     console.log(task)
// }).catch( (error) => {
//     console.log(error)
// })

// const me = new User({
//     name:'niharika',
//     age:'24',
//     password:'oldpassword'
// })

// me.save().then( () =>{
//     console.log('saved!'+me)
// }).catch( (error) =>{
//     console.log(error)
// })