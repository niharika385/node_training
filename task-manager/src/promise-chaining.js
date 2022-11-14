require('./db/mongoose')
const users = require('./models/users')

const task = require('./models/tasks')

// users.User.findByIdAndUpdate('636e2a130d570c46887151aa', {age:1}).then( (user) => {
//     console.log(user)
//     return users.User.countDocuments({age:1})
// } ).then((result) => {
//     console.log("result "+ result)
// }).catch( (error) => {
//     console.log(error)
// })

// task.findByIdAndDelete('636e2bb610ec5a0ac80f2207').then( (tasks) => {
//     console.log(tasks)
//     return task.countDocuments( { completed:false})
// }).then( (result) => {
//     console.log('result'+result)
// }).catch( (error) => {
//     console.log(error)
// })

// const updateAgeAndCount = async (id,age) =>{
//     const user = await users.User.findByIdAndUpdate('636e2a130d570c46887151aa' , {age})
//     const count = await users.User.countDocuments( {age})
//     return count
// }

// updateAgeAndCount( '636e2a130d570c46887151aa', 24).then( (count) =>{
//     console.log(count)
// }).catch( (e) =>{
//     console.log(e)
// })

const updateTask = async (id) =>{
    const user = await task.findById('636e2a130d570c46887151aa')
    const count = await task.countDocuments( {completed:false})
    return count
}

updateTask( '636e2a130d570c46887151aa').then( (count) =>{
    console.log(count)
}).catch( (e) =>{
    console.log(e)
})