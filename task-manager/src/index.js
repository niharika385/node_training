require('./db/mongoose')
const express = require('express')



const router = require('./router/user')
const app = express()

// app.use( (req,res, next) =>{
//     console.log('hi')
//     res.send('middleware test!')
// })


app.use(express.json())
app.use(router)


app.listen(3000, () => {
    console.log("server is up")
})